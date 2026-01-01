import {
  SECONDARY_THEME_COLOR,
  WEBSOCKET_URL,
  DISCORD_ID,
  THEME,
} from "../lib/constants";
import { useEffect, useState, useMemo, CSSProperties } from "react";
import { Presence } from "../types/lanyard";
import { FaSpotify } from "react-icons/fa";
import { Text } from "./Text";

// Next.js
import Link from "next/link";

// Credit to Phineas (https://github.com/phineas) for the lanyard implementation.
// Credit to Tim for the types (https://github.com/timcole/timcole.me/blob/main/src/types/lanyard.ts).

type Props = {
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
  style?: CSSProperties | undefined;
};

enum Operation {
  Event,
  Hello,
  Initialize,
  Heartbeat,
}

enum EventType {
  PRESENCE_UPDATE = "PRESENCE_UPDATE",
  INIT_STATE = "INIT_STATE",
}

type SocketEvent = {
  d: Presence | unknown;
  op: Operation;
  t?: EventType;
};

const logLanyardEvent = (eventName: string, data: any) => {
  console.log(
    `%cLanyard%c <~ ${eventName} %o`,
    `background-color: ${THEME}; border-radius: 5px; padding: 3px; color: ${SECONDARY_THEME_COLOR};`,
    `background: none; color: ${THEME};`,
    data
  );
};

export const Listening: React.FC<Props> = (
  {
    setActive,
    style,
    ...props
  }: {
    setActive: (active: boolean) => void;
    style?: CSSProperties | undefined;
  } & any,
  ref: any
) => {
  const [socket, setSocket] = useState<WebSocket | null>(null);
  const [doing, setDoing] = useState<Presence>();

  const send = (op: Operation, d?: unknown): void => {
    if (socket !== null) socket.send(JSON.stringify({ op, d }));
  };

  useEffect(() => {
    if (socket === null) return () => {};

    socket.onmessage = function ({ data }: MessageEvent): void {
      const { op, t, d }: SocketEvent = JSON.parse(data);

      if (op === Operation.Hello) {
        setInterval(
          () => send(Operation.Heartbeat),
          (d as { heartbeat_interval: number }).heartbeat_interval
        );
        send(Operation.Initialize, { subscribe_to_id: DISCORD_ID });
      } else if (op === Operation.Event && t) {
        logLanyardEvent(t, d);

        if ([EventType.INIT_STATE, EventType.PRESENCE_UPDATE].includes(t))
          setDoing(d as Presence);
      }
    };

    socket.onclose = () => {
      setSocket(null);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [socket]);

  useEffect(() => {
    if (!socket) setSocket(new WebSocket(WEBSOCKET_URL));
  }, [socket]);

  const currentActivity = useMemo(
    () => doing?.activities.filter((activity) => activity.type === 0)[0],
    [doing]
  );

  useEffect(() => {
    setActive(doing?.listening_to_spotify || currentActivity);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [doing, currentActivity]);

  if (!doing || !doing.discord_status)
    return (
      <div className="flex items-center mb-5" style={style}>
        <FaSpotify
          style={style}
          className="text-gray-600 dark:text-gray-300 hover:scale-110 duration-300"
        />
        <Text style={{ ...style, marginLeft: "8px", fontWeight: "bold" }}>
          Loading...
        </Text>
      </div>
    );

  return (
    <a
      className="flex items-center mb-5 duration-300 text-gray-600
      dark:text-gray-300 hover:opacity-50 cursor-pointer w-fit"
      style={style}
    >
      <FaSpotify className="mr-2" />
      {doing?.listening_to_spotify ? (
        <Link
          target="_blank"
          title={`${doing.spotify.album} by ${doing.spotify.artist.replaceAll(
            ";",
            ","
          )}`}
          rel="noreferrer"
          href={`https://open.spotify.com/track/${doing.spotify.track_id}`}
        >
          Listening to{" "}
          <b className="text-black dark:text-white" style={style}>
            {doing.spotify.album}
          </b>{" "}
          by{" "}
          <b className="text-black dark:text-white" style={style}>
            {doing.spotify.artist.replaceAll(";", ",")}
          </b>
        </Link>
      ) : (
        <Text style={{ ...style, fontWeight: "bold", cursor: "default" }}>
          Not listening to anything...
        </Text>
      )}
    </a>
  );
};
