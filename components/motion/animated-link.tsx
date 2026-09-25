"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import type { ComponentProps } from "react";

const MotionLink = motion.create(Link);

export default function AnimatedLink(props: ComponentProps<typeof MotionLink>) {
  const reducedMotion = useReducedMotion();
  return (
    <MotionLink
      {...props}
      whileHover={reducedMotion ? undefined : { y: -2 }}
      whileTap={reducedMotion ? undefined : { scale: 0.96 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
    />
  );
}
