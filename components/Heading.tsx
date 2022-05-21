export const Heading = ({ children }: { children: React.ReactNode }) => {
  return (
    <h1 className="text-4xl font-black mb-6 dark:text-white">{children}</h1>
  );
};
