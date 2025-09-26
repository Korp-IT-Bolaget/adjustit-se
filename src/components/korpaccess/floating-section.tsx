import { Briefcase, Calendar, Code, Shield, Users } from "lucide-react";

export interface FloatingData {
  title1: string;
  titleAccent: string;
  description: string;
  contactButton: string;
}

export default function FloatingSection({
  floatingData,
}: {
  floatingData: FloatingData;
}) {
  return (
    <section className="relative overflow-hidden">
      {/* Floating icons - Left */}
      <Code className="absolute left-[5%] top-[5%] icon-float-slow" size={64} />
      <Briefcase
        className="absolute left-[20%] top-[5%] icon-float-medium"
        size={64}
      />
      <Calendar
        className="absolute left-[12%] top-[35%] icon-float-fast"
        size={64}
      />
      <Shield
        className="absolute left-[8%] bottom-[5%] icon-float-medium"
        size={64}
      />
      <Users
        className="absolute left-[20%] bottom-[15%] icon-float-slow"
        size={64}
      />

      {/* Floating icons - Right */}
      <Code
        className="absolute right-[8%] top-[7%] icon-float-fast"
        size={64}
      />
      <Briefcase
        className="absolute right-[2%] top-[38%] icon-float-medium"
        size={64}
      />
      <Calendar
        className="absolute right-[7%] bottom-[5%] icon-float-slow"
        size={64}
      />
      <Shield
        className="absolute right-[15%] top-[34%] icon-float-medium"
        size={64}
      />
      <Users
        className="absolute right-[16%] bottom-[18%] icon-float-fast"
        size={64}
      />

      {/* Main content */}
      <div className="w-full bg-sky-700/20 py-24 relative z-10">
        <div className="flex flex-col gap-8 items-center max-w-xl md:max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-semibold">
            {floatingData.title1}
            <span className="text-accent">{floatingData.titleAccent}</span>
          </h2>
          <p>{floatingData.description}</p>
          <a
            href="mailto:contact@adjustit.se"
            className="w-fit rounded-full py-2.5 px-8 cursor-pointer bg-sky-700 text-white font-semibold text-base uppercase"
          >
            {floatingData.contactButton}
          </a>
        </div>
      </div>
    </section>
  );
}
