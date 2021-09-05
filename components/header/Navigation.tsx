import * as React from "react";
import { motion } from "framer-motion";
import MenuItem from "./MenuItem";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

export const Navigation = () => (
  <motion.ul
    className="m-0 p-6 absolute right-0 top-24 w-60"
    variants={variants}
  >
    <MenuItem />
  </motion.ul>
);