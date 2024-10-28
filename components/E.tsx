import { FULL_NAME, PROFESSION } from "../lib/constants";
import { useEffect, useState } from "react";
import { Switch } from "./Switch";
import { GoBack } from "./GoBack";
import { Text } from "./Text";
import { Seo } from "./Seo";

// Next.js
import { useRouter } from "next/router";

interface Props {
  heading: string;
  title: string;
  text: string;
  code: number;
}

export const E = (props: Props) => {
  const router = useRouter();

  const [enabled, setEnabled] = useState(false);

  const toggle = () => {
    setEnabled(!enabled);
  };

  const path = router.asPath;

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (path === "/luna" || path === "/gxthmxm" || path === "/coronux") {
        alert("Thanks Luna for the http.cat site lol!");
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Seo title={props.title} description={`${FULL_NAME} - ${PROFESSION}`} />
      <div className="flex flex-col items-center justify-center w-screen h-screen">
        {enabled ? (
          <picture>
            <img
              className="w-72"
              src={`https://http.cat/${props.code}.jpg`}
              title="A cat."
              alt="A cat."
            />
          </picture>
        ) : (
          <>
            {" "}
            <h1 className="text-4xl font-bold text-center tracking-tight dark:text-white">
              {props.heading}
            </h1>
            <Text style={{ marginBottom: "1rem" }}>{props.text}</Text>
          </>
        )}
        {!enabled && <GoBack />}
        {!enabled && (
          <div className="flex justify-center mt-2 items-center">
            <Switch enabled={enabled} setEnabled={toggle} />
          </div>
        )}
      </div>
    </>
  );
};
