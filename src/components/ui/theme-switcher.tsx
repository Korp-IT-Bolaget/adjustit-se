import * as React from "react";
import * as SwitchPrimitive from "@radix-ui/react-switch";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "./theme-provider";

import { cn } from "@/lib/utils";

function ThemeSwitchComponent({
  className,
  ...props
}: React.ComponentProps<typeof SwitchPrimitive.Root>) {
  const isChecked = props.checked;

  const baseRootClasses =
    "inline-flex shrink-0 items-center rounded-full border border-transparent shadow-xs transition-all outline-none disabled:cursor-not-allowed disabled:opacity-50";
  const baseThumbClasses =
    "bg-background dark:data-[state=unchecked]:bg-foreground dark:data-[state=checked]:bg-primary-foreground pointer-events-none block rounded-full ring-0 transition-transform flex items-center justify-center";

  const customRootSizeClasses = "h-6 w-10.5";
  const customThumbSizeClasses = "size-5";

  return (
    <SwitchPrimitive.Root
      data-slot="switch"
      className={cn(
        baseRootClasses,
        customRootSizeClasses,
        "border-1 border-border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2",
        "hover:border-accent",
        "peer data-[state=checked]:bg-primary data-[state=unchecked]:bg-neutral-300/60 dark:data-[state=unchecked]:bg-input/80",
        "dark:data-[state=checked]:bg-neutral-800/60 hover:cursor-pointer",
        className
      )}
      {...props}
    >
      <SwitchPrimitive.Thumb
        data-slot="switch-thumb"
        className={cn(
          baseThumbClasses,
          customThumbSizeClasses,
          "data-[state=checked]:translate-x-[calc(100%-0px)] data-[state=unchecked]:translate-x-0",
          "dark:data-[state=checked]:bg-black"
        )}
      >
        {isChecked ? (
          <Moon className="h-4 w-4 text-foreground" />
        ) : (
          <Sun className="h-4 w-4 text-yellow-500" />
        )}
      </SwitchPrimitive.Thumb>
    </SwitchPrimitive.Root>
  );
}

export default function ThemeSwitcher() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <ThemeSwitchComponent
      id="dark-mode-toggle"
      checked={isDark}
      onCheckedChange={toggleTheme}
      aria-label="Toggle dark mode"
    />
  );
}
