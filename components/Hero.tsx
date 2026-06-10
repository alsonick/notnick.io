export const Hero = () => {
  return (
    <div
      className="hidden sm:block absolute top-0 left-0 w-full h-screen -z-10 bg-cover bg-center bg-no-repeat opacity-0 dark:opacity-100 transition-opacity duration-500"
      style={{ backgroundImage: "url('/background.jpg')" }}
    >
      {/* Heavily darken the image, then fade it into the page background at the bottom so there's no hard cut-off */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/75 to-black" />
    </div>
  );
};
