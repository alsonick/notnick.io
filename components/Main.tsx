import React from "react";
import Image from "next/image";
import { Listening } from "./Listening";

export const Main = () => {
  const [_, setPresenceActive] = React.useState(false);

  return (
    <main className="flex items-center justify-center w-full h-screen lg:flex-row flex-col">
      <div className="lg:flex items-center lg:border-r hidden">
        <Image src="/me.jpeg" width={348} height={348} quality={99} alt="Me" />
      </div>
      <div className="lg:ml-28">
        <h1 className="text-5xl mb-6 font-semibold">Hey there! 👋</h1>
        <p className="text-xl max-w-xl text-slate-800 pb-6 border-b">
          My name is Nicholas and I'm a {new Date().getFullYear() - 2003} y/o
          software engineer based in the UK. I mainly do mobile & web
          development and systems programming on the side.
        </p>
        <Listening setActive={setPresenceActive} />
      </div>
    </main>
  );
};
