import { motion } from "framer-motion";
import React from "react";

export const Animate = (props: { children?: React.ReactNode }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      {props.children}
    </motion.div>
  );
};
