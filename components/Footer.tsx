export const Footer = () => {
  return (
    <footer className="flex flex-col border-t mt-6 border-teal-100 dark:border-teal-900 pt-10">
      <h2 className="text-xl opacity-50 font-bold dark:text-white">
        Nicholas Njoki
      </h2>
      <p className="text-gray-500 opacity-50 text-xs mb-12">
        &copy; {new Date().getFullYear()} | All rights reserved
      </p>
    </footer>
  );
};
