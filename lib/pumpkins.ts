const CONTAINER_ID = "pumpkins";
const MAX_PUMPKINS = 30;
const MIN_PUMPKINS = 12;

function randomInRange(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

export const pumpkins = () => {
  // Every page mounts its own Seo, so only the first call builds the overlay
  // and the pumpkins keep falling undisturbed across navigations.
  if (document.getElementById(CONTAINER_ID)) return;

  const container = document.createElement("div");
  container.id = CONTAINER_ID;
  container.setAttribute("aria-hidden", "true");

  // Fewer on a narrow screen, where the full set would crowd out the text.
  const count = Math.min(
    MAX_PUMPKINS,
    Math.max(MIN_PUMPKINS, Math.round(window.innerWidth / 40))
  );

  for (let i = 0; i < count; i++) {
    const pumpkin = document.createElement("span");
    pumpkin.textContent = "🎃";
    pumpkin.style.fontSize = `${randomInRange(14, 30).toFixed(0)}px`;
    pumpkin.style.opacity = randomInRange(0.4, 1).toFixed(2);
    pumpkin.style.animationDuration = `${randomInRange(10, 30).toFixed(1)}s`;
    // A negative delay starts each pumpkin part-way down, so the screen is
    // already full rather than waiting for the first ones to fall in.
    pumpkin.style.animationDelay = `-${randomInRange(0, 30).toFixed(1)}s`;
    pumpkin.style.setProperty("--x", `${randomInRange(0, 100).toFixed(2)}vw`);
    pumpkin.style.setProperty(
      "--drift",
      `${randomInRange(-10, 10).toFixed(2)}vw`
    );
    pumpkin.style.setProperty(
      "--spin",
      `${randomInRange(-180, 180).toFixed(0)}deg`
    );
    container.appendChild(pumpkin);
  }

  document.body.appendChild(container);
};
