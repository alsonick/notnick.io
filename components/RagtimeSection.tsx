import { Heading } from "./Heading";

interface Props {
  children: React.ReactNode;
  title: string;
}

export const RagtimeSection = ({ children, title }: Props) => {
  return (
    <section className="mb-10">
      <Heading>{title}</Heading>
      {children}
      <hr className="mt-5 border-teal-100 dark:border-teal-900" />
    </section>
  );
};
