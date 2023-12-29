/* eslint-disable @next/next/no-img-element */
import { THEME } from "../../lib/constants";
import { ImageResponse } from "@vercel/og";
import { NextRequest } from "next/server";

export const config = {
  runtime: "edge",
};

// https://github.com/vercel/next.js/discussions/44719
const font = fetch(
  new URL("../../assets/Inter-Bold.ttf", import.meta.url).toString()
).then((res) => res.arrayBuffer());

export default async function handler(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);

    const hasDescription = searchParams.has("description");
    const hasTitle = searchParams.has("title");

    const title = hasTitle
      ? searchParams.get("title")?.slice(0, 100)
      : "Nicholas Njoki";

    const description = hasDescription
      ? searchParams.get("description")?.slice(0, 100)
      : "No description.";

    const fontData = await font;

    return new ImageResponse(
      (
        <div tw="flex w-full items-center bg-black py-30 text-white text-2xl h-full">
          <div tw={`absolute top-0 bg-[${THEME}] h-5 w-full z-20`}></div>
          <div tw="px-30 flex flex-col h-full justify-between">
            <div tw="flex flex-col my-10">
              <h1 tw="text-7xl tracking-tight m-0 mb-5">{title}</h1>
              <p tw="text-gray-600 max-w-2xl m-0">{description}</p>
            </div>
            <div tw="flex items-center">
              <img
                tw="rounded-full mr-5"
                src="https://notnick.io/memoji.png"
                width={90}
                height={90}
                alt="sd"
              />
              <div tw="flex flex-col justify-center">
                <h2 tw="text-4xl m-0 tracking-tight">Nicholas Njoki</h2>
                <p tw="text-gray-600 text-lg m-0">Full-Stack Developer</p>
              </div>
            </div>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 600,
        fonts: [
          {
            name: "Inter",
            data: fontData,
            style: "normal",
          },
        ],
      }
    );
  } catch (e: any) {
    console.log(`${e.message}`);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}
