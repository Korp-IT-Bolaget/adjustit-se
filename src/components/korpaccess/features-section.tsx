import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import img1 from "../../assets/tmp1.png";
import img2 from "../../assets/pexels-seven11nash-380769.jpg";
import img3 from "../../assets/105723.webp";

export interface FeaturesData {
  title1: string;
  titleAccent: string;
  imageAltText: string;
  accordions: {
    accordion1: FeatureAccordionItem;
    accordion2: FeatureAccordionItem;
    accordion3: FeatureAccordionItem;
    accordion4: FeatureAccordionItem;
  };
}

interface FeatureAccordionItem {
  title: string;
  content: string;
}

type AccordionKey = keyof FeaturesData["accordions"];

export default function FeaturesSection({
  featuresData,
}: {
  featuresData: FeaturesData;
}) {
  const initialAccordionValue: AccordionKey = Object.keys(
    featuresData.accordions
  )[0] as AccordionKey;
  const [accordionValue, setAccordionValue] = useState<AccordionKey>(
    initialAccordionValue
  );

  const imageMap: Record<AccordionKey, string> = {
    accordion1: img1,
    accordion2: img2,
    accordion3: img3,
    accordion4: img1,
  };

  return (
    <section>
      <div className="mx-auto px-8 py-8 w-full max-w-7xl flex flex-col gap-16">
        <h2 className="text-center text-4xl font-semibold">
          {featuresData.title1}
          <span className="text-accent">{featuresData.titleAccent}</span>
        </h2>
        <div className="flex flex-row gap-4 items-center">
          <div className="w-full md:w-1/2 pb-20">
            <Accordion
              type="single"
              value={accordionValue}
              onValueChange={(value) => {
                if (value) {
                  setAccordionValue(value as AccordionKey);
                }
              }}
            >
              {Object.entries(featuresData.accordions).map(([key, item]) => (
                <AccordionItem key={key} value={key}>
                  <AccordionTrigger className="text-xl">
                    {item.title}
                  </AccordionTrigger>
                  <AccordionContent className="text-base">
                    {item.content}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
          <div className="w-1/2 hidden md:block">
            <div className="relative flex justify-center">
              <AnimatePresence mode="wait">
                <motion.img
                  key={accordionValue}
                  src={imageMap[accordionValue]}
                  alt={featuresData.imageAltText}
                  className="w-[455px] object-cover rounded-md relative z-10"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                />
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
