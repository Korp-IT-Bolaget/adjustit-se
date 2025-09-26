export interface HeroData {
  title1: string;
  titleAccent: string;
  title2: string;
  description: string;
  contactButton: string;
}

export default function Herosection({ heroData }: { heroData: HeroData }) {
  return (
    <section className="relative bg-extra-strong flex items-start justify-center">
      <div className="mx-auto px-8 pt-32 pb-16 w-full max-w-7xl">
        <div className="text-center flex flex-col gap-8 items-center">
          <h1 className="text-5xl font-semibold">
            {heroData.title1}
            <span className="text-accent">{heroData.titleAccent}</span>
            {heroData.title2}
          </h1>
          <p className="max-w-4xl">{heroData.description}</p>
          <a
            href="mailto:contact@adjustit.se"
            className="w-fit rounded-full py-2.5 px-8 cursor-pointer bg-sky-700 text-white font-semibold text-base uppercase"
          >
            {heroData.contactButton}
          </a>
        </div>
      </div>
    </section>
  );
}
