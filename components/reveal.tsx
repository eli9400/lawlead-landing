"use client";

import {
  type CSSProperties,
  type HTMLAttributes,
  type ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";

import { cn } from "@/lib/utils";

type RevealProps = {
  children: ReactNode;
  delay?: number;
  distance?: number;
} & HTMLAttributes<HTMLDivElement>;

export function Reveal({
  children,
  className,
  delay = 0,
  distance = 34,
  style,
  ...props
}: RevealProps) {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const element = ref.current;

    if (!element) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;

        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.24,
        rootMargin: "0px 0px -12% 0px",
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={cn("reveal", className)}
      data-visible={visible ? "true" : "false"}
      style={
        {
          "--reveal-delay": `${delay}ms`,
          "--reveal-distance": `${distance}px`,
          ...style,
        } as CSSProperties
      }
      {...props}
    >
      {children}
    </div>
  );
}
