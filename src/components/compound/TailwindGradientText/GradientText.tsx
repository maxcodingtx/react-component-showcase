import {
  type TailwindColors,
  type TailwindShades,
  type LinearDirections,
} from "./types/barrel";

// TODO: add radial and conic gradient support.

interface GradientTextProps {
  fromColor: TailwindColors;
  fromShade: TailwindShades;
  toColor: TailwindColors;
  toShade: TailwindShades;
  header?: boolean;
  children?: React.ReactNode;
  className?: string;
  direction?: LinearDirections;
}

// works only if tailwind is configured to allow dynamic class names
export default function GradientText({
  fromColor,
  fromShade,
  toColor,
  toShade,
  header,
  children,
  className = "",
  direction = "r",
}: GradientTextProps) {
  const defaultStyles = `bg-gradient-to-${direction} from-${fromColor}-${fromShade} to-${toColor}-${toShade} bg-clip-text text-transparent ${className}`;
  switch (header) {
    case true:
      return <h1 className={defaultStyles}>{children}</h1>;

    case false:
    default:
      return <p className={defaultStyles}>{children}</p>;
  }
}
