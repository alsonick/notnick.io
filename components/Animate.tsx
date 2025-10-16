import React from "react";

// export const Animate = (props: { children?: React.ReactNode }) => {
//   return (
//     <motion.div
//       initial={{ opacity: 0, scale: 0.5 }}
//       animate={{ opacity: 1, scale: 1 }}
//       transition={{ duration: 0.5 }}
//     >
//       {props.children}
//     </motion.div>
//   );
// };

/*
I've decided to remove the page load animation across all pages. Instead of manually removing every instance of the <Animation /> component, I simply wrapped its contents in an empty fragment (<>...</>), effectively disabling it without changing each individual usage.

*/

export const Animate = (props: { children?: React.ReactNode }) => {
  return <>{props.children}</>;
};
