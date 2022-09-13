import { GoBack } from "./GoBack";
import { Text } from "./Text";
import { Seo } from "./Seo";

interface Props {
  heading: string;
  title: string;
  text: string;
}

export const E = ({ heading, title, text }: Props) => {
  return (
    <>
      <Seo
        title={`${title} - Nicholas Njoki`}
        description="Nicholas Njoki - Full-Stack Developer"
      />
      <div className="flex flex-col items-center justify-center w-screen h-screen">
        <h1 className="text-4xl font-bold text-center tracking-tight dark:text-white">
          {heading}
        </h1>
        <Text style={{ marginBottom: "1rem" }}>{text}</Text>
        <GoBack />
      </div>
    </>
  );
};
