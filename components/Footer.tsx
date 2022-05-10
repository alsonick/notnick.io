export const Footer = () => {
  return (
    <footer className="flex flex-col w-full border-t pt-10 mt-72 mb-28">
      <h1 className="text-2xl font-bold text-gray-900">Nicholas Njoki</h1>
      <p className="text-gray-600 text-sm">
        &copy; {new Date().getFullYear()} | All rights reserved
      </p>
    </footer>
  );
};
