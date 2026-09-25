"use client";

import { useEffect, type ReactNode } from "react";
import { useAnimate, useInView, useReducedMotion } from "motion/react";

export default function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const [scope, animate] = useAnimate();
  const inView = useInView(scope, { once: true, amount: 0.15 });
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (!inView || reducedMotion) return;
    const animation = animate(
      scope.current,
      {
        opacity: 1,
        transform: "translateY(0px)",
      },
      { duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] },
    );
    return () => animation.stop();
  }, [animate, delay, inView, reducedMotion, scope]);

  return (
    <div ref={scope} className={`reveal${className ? ` ${className}` : ""}`}>
      {children}
    </div>
  );
}
