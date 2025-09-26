import { useEffect, useState, useRef } from "react";
import { Card } from "@/components/ui/card";
import {
  Monitor,
  Cloud,
  Code,
  Shield,
  LifeBuoy,
  Lightbulb,
  ChevronRight,
  type LucideIcon,
} from "lucide-react";

export interface DevToolsData {
  part1: string;
  part2: string;
  part3: string;
}

interface IconData {
  icon: LucideIcon;
  glowClass: string;
}

export default function DevToolsSection({
  devToolsData,
}: {
  devToolsData: DevToolsData;
}) {
  const [cardsPerRow, setCardsPerRow] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Use the IconData type for the icons array.
  const icons: IconData[] = [
    {
      icon: Monitor,
      glowClass: "hover:shadow-[0_0_20px_0_rgba(14,165,233,0.7)]",
    },
    { icon: Cloud, glowClass: "hover:shadow-[0_0_20px_0_rgba(6,182,212,0.7)]" },
    { icon: Code, glowClass: "hover:shadow-[0_0_20px_0_rgba(244,63,94,0.7)]" },
    {
      icon: Shield,
      glowClass: "hover:shadow-[0_0_20px_0_rgba(234,179,8,0.7)]",
    },
    {
      icon: LifeBuoy,
      glowClass: "hover:shadow-[0_0_20px_0_rgba(34,197,94,0.7)]",
    },
    {
      icon: Lightbulb,
      glowClass: "hover:shadow-[0_0_20px_0_rgba(168,85,247,0.7)]",
    },
    {
      icon: ChevronRight,
      glowClass: "hover:shadow-[0_0_20px_0_rgba(251,191,36,0.7)]",
    },
  ];

  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        const containerWidth = containerRef.current.offsetWidth;
        const cardWidth = 96;
        const cardGap = 16;
        const buffer = 3;

        const newCardsPerRow =
          Math.floor(containerWidth / (cardWidth + cardGap)) + buffer;
        setCardsPerRow(newCardsPerRow);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  let iconCounter = 0;
  const centerCol = Math.floor(cardsPerRow / 2);

  return (
    <section className="relative bg-extra-strong overflow-hidden pt-8">
      <h2 className="text-4xl font-semibold text-center px-8">
        <span>
          {devToolsData.part1}{" "}
          <span className="text-accent">{devToolsData.part2}</span>
        </span>
        <span className="text-accent block">{devToolsData.part3}</span>
      </h2>
      <div
        ref={containerRef}
        className="mt-8 relative flex flex-col gap-4 w-full items-center justify-center"
      >
        <div className="hidden md:block absolute inset-y-0 left-0 w-80 bg-gradient-to-r from-white dark:from-[#0a0a0a] via-transparent to-transparent z-10 pointer-events-none"></div>
        <div className="hidden md:block absolute inset-y-0 right-0 w-80 bg-gradient-to-l from-white dark:from-[#0a0a0a] via-transparent to-transparent z-10 pointer-events-none"></div>

        <div className="absolute inset-x-0 top-0 h-80 bg-gradient-to-b from-white dark:from-[#0a0a0a] via-transparent to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-x-0 bottom-0 h-80 bg-gradient-to-t from-white dark:from-[#0a0a0a] via-transparent to-transparent z-10 pointer-events-none"></div>

        {[...Array(4)].map((_, rowIndex) => (
          <div
            key={rowIndex}
            className={`flex flex-row gap-6 ${
              rowIndex % 2 !== 0 ? "ml-[-3.5rem]" : ""
            }`}
          >
            {[...Array(cardsPerRow)].map((_, colIndex) => {
              const isIconCard =
                (rowIndex === 1 &&
                  (colIndex === centerCol - 2 ||
                    colIndex === centerCol - 1 ||
                    colIndex === centerCol)) ||
                (rowIndex === 2 &&
                  (colIndex === centerCol - 2 ||
                    colIndex === centerCol - 1 ||
                    colIndex === centerCol ||
                    colIndex === centerCol + 1));

              let IconComponent = null;
              let hoverClass = "";

              if (isIconCard) {
                const iconData = icons[iconCounter];
                IconComponent = iconData.icon;
                hoverClass = iconData.glowClass;
                iconCounter++;
              } else {
                hoverClass = "hover:scale-90";
              }

              return (
                <Card
                  key={colIndex}
                  className={`
                    w-24 h-24 flex items-center justify-center 
                    transition-all duration-300 ease-in-out
                    ${hoverClass}
                  `}
                >
                  {IconComponent && (
                    <IconComponent className="w-12 h-12 text-zinc-600 dark:text-zinc-400" />
                  )}
                </Card>
              );
            })}
          </div>
        ))}
      </div>
    </section>
  );
}
