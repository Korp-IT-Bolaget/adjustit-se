import { motion } from "framer-motion";
import {
  Cloud,
  Code2,
  LifeBuoy,
  Lightbulb,
  Shield,
  TrendingUp,
  ChevronDown,
  type LucideIcon,
} from "lucide-react";
import { useState, useEffect, memo } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

export interface HeroData {
  category1: string;
  category2: string;
  title1: string;
  title2: string;
  subtitle: string;
  paragraph: string;
  ctaButton: string;
  cards: HeroCards;
}

interface HeroCard {
  title: string;
  description: string;
}

interface HeroCards {
  smartSolutions: HeroCard;
  securityStability: HeroCard;
  future: HeroCard;
  innovationGrowth: HeroCard;
  supportMaintenance: HeroCard;
  cloudSolutions: HeroCard;
}

interface CategoryRowProps {
  heroData: {
    category1: string;
    category2: string;
  };
}

const CategoryRow = memo(({ heroData }: CategoryRowProps) => {
  const [isWrapped, setIsWrapped] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsWrapped(window.innerWidth <= 532);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const firstDivClassName = isWrapped
    ? "bg-sky-700 text-neutral-100 py-0.5 px-2 rounded-t-sm rounded-br-sm capitalize"
    : "bg-sky-700 text-neutral-100 py-0.5 px-2 rounded-l-sm capitalize";

  const secondDivClassName = isWrapped
    ? "bg-neutral-700 text-neutral-100 py-0.5 px-2 capitalize rounded-b-sm"
    : "bg-neutral-700 text-neutral-100 py-0.5 px-2 capitalize rounded-r-sm";

  return (
    <motion.div
      className="flex flex-row flex-wrap"
      initial={{ x: -768, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <div className={firstDivClassName}>
        <h2>{heroData.category1}</h2>
      </div>
      <div className={secondDivClassName}>
        <h2>{heroData.category2}</h2>
      </div>
    </motion.div>
  );
});

export default function HeroSection({ heroData }: { heroData: HeroData }) {
  const [isVisible, setIsVisible] = useState(true);

  // Use the `LucideIcon` type for the values to ensure type safety
  const cardIcons: { [key: string]: LucideIcon } = {
    smartSolutions: Code2,
    securityStability: Shield,
    future: TrendingUp,
    innovationGrowth: Lightbulb,
    supportMaintenance: LifeBuoy,
    cloudSolutions: Cloud,
  };

  const cardKeys = Object.keys(cardIcons);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="relative min-h-screen bg-extra-strong flex items-start justify-center">
      <div className="mx-auto px-8 pt-20 lg:pt-32 pb-16 w-full max-w-7xl">
        <div className="flex flex-col-reverse items-start lg:flex-row lg:items-center justify-between gap-8 lg:gap-2">
          {/* Left content */}
          <div className="w-full lg:w-1/2 flex flex-col gap-2">
            <CategoryRow heroData={heroData} />
            <motion.h1
              className="relative text-5xl gradient-text-h1 font-semibold pb-2 inline-block w-fit capitalize"
              initial={{ y: 200, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
            >
              <span>{heroData.title1}</span>
              <span className="block dark:text-neutral-200">
                {heroData.title2}
              </span>
            </motion.h1>
            <motion.p
              className="text-2xl dark:text-neutral-200 font-medium"
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
            >
              {heroData.subtitle}
            </motion.p>
            <motion.p
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.8 }}
            >
              {heroData.paragraph}
            </motion.p>
            <motion.a
              href="mailto:contact.adjustit.se"
              className="w-fit rounded-full py-2.5 px-8 mt-1 cursor-pointer bg-sky-700 hover:bg-sky-800 transition-colors text-white font-semibold text-base uppercase"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 1.2 }}
            >
              {heroData.ctaButton}
            </motion.a>
          </div>

          {/* Right content */}
          <div className="w-full lg:w-1/2 flex self-center justify-center lg:items-end lg:justify-center">
            {/* Coming soon */}
          </div>
        </div>
        <div className="mt-9 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {cardKeys.map((key, index) => {
            const IconComponent = cardIcons[key];
            const cardData = heroData.cards[key as keyof HeroCards];
            return (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.0, delay: index * 0.1 }}
                className="flex-1"
              >
                <Card className="h-[200px] hover:bg-popover/60 transition-all duration-200">
                  <CardHeader>
                    <div className="bg-border/80 w-fit rounded-md p-3 mb-4">
                      <IconComponent className="text-accent" />
                    </div>
                    <CardTitle className="text-neutral-700 dark:text-neutral-200">
                      {cardData.title}
                    </CardTitle>
                    <CardDescription className="pt-2">
                      {cardData.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
      <div className="hero-background"></div>
      {isVisible && (
        <motion.div
          className="absolute left-1/2 bottom-8"
          style={{ x: "-50%" }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 2.0 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{
              delay: 2.5,
              duration: 1.5,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "mirror",
            }}
          >
            <ChevronDown className="h-8 w-8 text-neutral-500" />
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
