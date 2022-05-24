import { DISCORD_ID, WEBSOCKET_URL } from "../lib/constants";
import { useEffect, useState, useMemo } from "react";
import { Presence } from "../types/lanyard";
import { FaSpotify } from "react-icons/fa";
import { Text } from "./Text";

// Credit to Phineas for the lanyard implementation
// Credit to Tim for the types (https://github.com/timcole/timcole.me/blob/%F0%9F%A6%84/components/lanyard.tsx)

type Props = {
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
};

enum Operation {
  Event,
  Hello,
  Initialize,
  Heartbeat,
}

enum EventType {
  INIT_STATE = "INIT_STATE",
  PRESENCE_UPDATE = "PRESENCE_UPDATE",
}

type SocketEvent = {
  op: Operation;
  t?: EventType;
  d: Presence | unknown;
};

const logLanyardEvent = (eventName: string, data: any) => {
  console.log(
    `%cLanyard%c <~ ${eventName} %o`,
    "background-color: #f54bff; border-radius: 5px; padding: 3px; color: #5050ff;",
    "background: none; color: #f54bff;",
    data
  );
};

export const Listening: React.FC<Props> = (
  { setActive, ...props }: { setActive: (active: boolean) => void } & any,
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
  }, [doing, currentActivity]);

  if (!doing || !doing.discord_status)
    return (
      <div className="flex items-center mb-6">
        <FaSpotify className="mr-2 text-gray-600 dark:text-gray-300" />
        <Text>Loading...</Text>
      </div>
    );
  return (
    <a className="flex items-center mb-6 duration-300 text-gray-600 dark:text-gray-300 hover:opacity-50 cursor-pointer w-fit">
      <FaSpotify className="mr-2" />
      {doing?.listening_to_spotify ? (
        <a
          target="_blank"
          rel="noreferrer"
          href={`https://open.spotify.com/track/${doing.spotify.track_id}`}
        >
          Listening to{" "}
          <b className="text-black dark:text-white">{doing.spotify.album}</b> by{" "}
          <b className="text-black dark:text-white">
            {doing.spotify.artist.replaceAll(";", ",")}
          </b>
        </a>
      ) : (
        <div>Not listening to anything...</div>
      )}
    </a>
  );
};
