import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export interface FaqData {
  title1: string;
  titleAccent: string;
  questions: {
    [key: string]: FaqQuestion;
  };
}

interface FaqQuestion {
  title: string;
  content: string;
}

export default function FaqSection({ faqData }: { faqData: FaqData }) {
  return (
    <section className="relative ">
      <div className="mx-auto px-8 py-16 w-full max-w-7xl flex flex-col gap-16">
        <h2 className="text-4xl text-center font-semibold">
          {faqData.title1}
          <span className="text-accent">{faqData.titleAccent}</span>
        </h2>
        <Accordion type="single" collapsible className="min-h-[440px]">
          {Object.entries(faqData.questions).map(([key, question]) => (
            <AccordionItem key={key} value={key}>
              <AccordionTrigger className="text-xl">
                {question.title}
              </AccordionTrigger>
              <AccordionContent className="text-base">
                {question.content}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
