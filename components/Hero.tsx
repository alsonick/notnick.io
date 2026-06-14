export const Hero = () => {
  // Dissolve the whole image to transparent toward the bottom (instead of painting
  // an opaque colour there). That way the body background is the only backdrop showing
  // through the bottom edge, and since the body background-color transitions on theme
  // toggle, the image's edge never reveals a seam while the theme cross-fades.
  const fade = "linear-gradient(to bottom, black 0%, black 60%, transparent 100%)";

  return (
    <div
      className="hidden sm:block absolute top-0 left-0 w-full h-screen -z-10 bg-cover bg-center bg-no-repeat opacity-0 dark:opacity-100 transition-opacity duration-200 dark:duration-300"
      style={{
        backgroundImage: "url('/background.jpg')",
        maskImage: fade,
        WebkitMaskImage: fade,
      }}
    >
      {/* Darken the photo for legibility; the mask above dissolves this overlay too,
          so the image fades into the page background rather than into a hard-coded colour. */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/75 to-black" />
    </div>
  );
};
