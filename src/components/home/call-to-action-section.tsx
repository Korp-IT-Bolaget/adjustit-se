export interface CtaData {
  title1: string;
  title2: string;
  title3: string;
  description: string;
  actionButton: string;
}

export default function CallToAction({ ctaData }: { ctaData: CtaData }) {
  return (
    <section className="relative bg-extra-strong flex items-center justify-center py-56">
      <div className="hero-background scale-x-[-1]"></div>
      <div className="mx-auto px-8 w-full max-w-2xl">
        <div className="flex flex-col items-center gap-8 text-center">
          <h2 className="text-4xl font-semibold dark:text-white">
            <span className="text-accent">{ctaData.title1}</span>
            <span className="block">
              {ctaData.title2}
              <span className="text-accent whitespace-nowrap">
                &nbsp;{ctaData.title3}
              </span>
            </span>
          </h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-300">
            {ctaData.description}
          </p>
          <a
            href="mailto:contact.adjustit.se"
            className="w-fit rounded-full py-2.5 px-8 cursor-pointer bg-sky-700 text-white font-semibold text-base uppercase transition-colors duration-300 hover:bg-sky-800"
          >
            {ctaData.actionButton}
          </a>
        </div>
      </div>
    </section>
  );
}
