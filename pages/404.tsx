import { LinkTag } from "../components/LinkTag";
import { Seo } from "../components/Seo";

const NotFound = () => {
  return (
    <>
      <Seo
        title="Page Not Found - Nicholas Njoki"
        description="Nicholas Njoki - Full-Stack Developer"
      />
      <div className="flex flex-col items-center justify-center w-screen h-screen">
        <h1 className="text-4xl font-bold tracking-tight mb-2 dark:text-white">
          Page Not Found
        </h1>
        <LinkTag href="/">&larr; Go Back</LinkTag>
      </div>
    </>
  );
};

export default NotFound;
