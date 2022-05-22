export const Footer = () => {
  return (
    <footer className="flex flex-col border-t-2 mt-6 opacity-50 border-teal-100 dark:border-teal-900 pt-10">
      <h2 className="text-xl font-bold dark:text-white">Nicholas Njoki</h2>
      <p className="text-gray-500 text-xs mb-12">
        &copy; {new Date().getFullYear()} | All rights reserved
      </p>
    </footer>
  );
};
