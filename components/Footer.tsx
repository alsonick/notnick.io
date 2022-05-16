export const Footer = () => {
  return (
    <footer className="flex flex-col w-full border-t border-teal-100 dark:border-teal-900 pt-10 mt-6 mb-12">
      <h2 className="text-lg font-bold dark:text-white">Nicholas Njoki</h2>
      <p className="text-gray-500 text-xs">
        &copy; {new Date().getFullYear()} | All rights reserved
      </p>
    </footer>
  );
};
