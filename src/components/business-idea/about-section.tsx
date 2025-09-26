export interface AboutData {
  title1: string;
  title2: string;
  text: string;
}

export default function AboutSection({ aboutData }: { aboutData: AboutData }) {
  return (
    <section>
      <div className="mx-auto px-8 pt-32 pb-8 w-full max-w-7xl">
        <div className="flex flex-row gap-4 items-center">
          <div className="md:w-1/2 flex flex-col">
            <h1 className="text-4xl font-semibold">
              {aboutData.title1}{" "}
              <span className="text-accent">{aboutData.title2}</span>
            </h1>
            <p className="text-sm mt-4">{aboutData.text}</p>
          </div>
        </div>
      </div>
    </section>
  );
}