import { FULL_NAME, PROFESSION } from "../lib/constants";
import { useEffect, useRef, useState } from "react";
import { GoBack } from "./GoBack";
import { Text } from "./Text";
import { Seo } from "./Seo";

// Next.js
import { useRouter } from "next/router";
import { Switch } from "./Switch";

interface Props {
  description?: string;
  subtitle?: string;
  title: string;
  code: number;
}

export const E = (props: Props) => {
  const router = useRouter();

  const [mounted, setMounted] = useState(false);
  const [enabled, setEnabled] = useState(false);
  const alertedRef = useRef(false);

  const easterEggPaths = ["/luna", "/gxthmxm", "/coronux", "/rei"];
  const isEasterEgg = mounted && easterEggPaths.includes(router.asPath);

  const toggle = () => {
    setEnabled(!enabled);
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (isEasterEgg && !alertedRef.current) {
      alertedRef.current = true;
      alert("Thanks Rei for the http.cat site lol!");
    }
  }, [isEasterEgg]);

  if (!mounted) return null;

  return (
    <>
      <Seo title={props.title} description={`${FULL_NAME} - ${PROFESSION}`} />
      <div className="flex flex-col items-center justify-center w-screen h-screen px-6">
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
          !isEasterEgg && (
            <div className="flex flex-col items-center max-w-md">
              {props.subtitle && (
                <h2 className="text-4xl font-semibold text-center tracking-tight text-gray-800 dark:text-gray-200 mb-3">
                  {props.code} - {props.subtitle}
                </h2>
              )}
              {props.description && (
                <div className="mb-5 text-center">
                  <Text>{props.description}</Text>
                </div>
              )}
            </div>
          )
        )}
        {!enabled && !isEasterEgg && <GoBack />}
        <div className="flex justify-center mt-2 items-center">
          <Switch enabled={enabled} setEnabled={toggle} />
        </div>
      </div>
    </>
  );
};
