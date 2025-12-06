# Tailwind Gradient Text

A small React utility component for rendering text with a Tailwind CSS gradient fill. It uses Tailwind's build in gradient classes along with `bg-clip-text` to create gradient text for headings and paragraphs.

## Overview

- Renders either a heading (`h1`) or paragraph (`p`) based on the `header` prop.
- Supports Tailwind color families and shades (e.g., `from-blue-500` → `to-purple-600`).
- Lets you choose gradient direction with Tailwind's `t, tr, r, br, b, bl, l, tl` shorthands.
- Requires Tailwind to allow dynamic class names.

## Component

`src/components/compound/TailwindGradientText/GradientText.tsx`

### Props

- `fromColor`: Tailwind color family (e.g., `"blue"`, `"emerald"`).
- `fromShade`: Tailwind shade as a string (e.g., `"400"`, `"600"`).
- `toColor`: Tailwind color family for the end of the gradient.
- `toShade`: Tailwind shade for the end of the gradient.
- `direction` (optional): Linear direction shorthand (`"t" | "tr" | "r" | "br" | "b" | "bl" | "l" | "tl"`). Defaults to `"r"`.
- `header` (optional): When `true`, renders an `h1`. When `false` or omitted, renders a `p`.
- `className` (optional): Additional classes appended to the default gradient classes.
- `children` (optional): Text or nodes to render inside.
- `gradientType`: Currently typed as `"linear" | "radial" | "conic"`. The component presently uses linear gradients; this prop is reserved for future expansion.

### Usage

```tsx
import GradientText from "../../compound/TailwindGradientText/GradientText";

export default function Example() {
  return (
    <div className="space-y-6">
      <GradientText
        header={true}
        fromColor="blue"
        fromShade="500"
        toColor="purple"
        toShade="600"
        direction="r"
        gradientType="linear"
      >
        Stunning Gradient Heading
      </GradientText>

      <GradientText
        fromColor="emerald"
        fromShade="400"
        toColor="cyan"
        toShade="500"
        direction="tl"
        gradientType="linear"
      >
        Gradient paragraph with custom size.
      </GradientText>
    </div>
  );
}
```

## Tailwind Configuration (Dynamic Classes)

This component constructs class names dynamically (e.g., `from-${fromColor}-${fromShade}`). Tailwind must be configured to include these in production builds.
