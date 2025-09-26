import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { Github, Linkedin, type LucideIcon } from "lucide-react";
import ManjaroPfp from "../../assets/d1250cd51be458b7fd9ce350e63b6f87d9004b64_full.jpg";
import KyematePfp from "../../assets/22459582.png";
import ZeytharPfp from "../../assets/199282960.png";
import AgnesPfp from "../../assets/144246880.png";

export interface TeamData {
  title1: string;
  title2: string;
  members: {
    manjaro: TeamMemberData;
    kyemate: TeamMemberData;
    zeythar: TeamMemberData;
    agnes: TeamMemberData;
    [key: string]: TeamMemberData;
  };
}

interface SocialLink {
  icon: LucideIcon;
  href: string;
}

interface TeamMemberData {
  name: string;
  role: string;
}

interface ProcessedTeamMember {
  name: string;
  title: string;
  pfp: string | null;
  socials: SocialLink[];
}

export default function TeamSection({ teamData }: { teamData: TeamData }) {
  const teamMembers: ProcessedTeamMember[] = Object.entries(
    teamData.members
  ).map(([key, member]) => {
    let pfp: string | null;
    switch (key) {
      case "manjaro":
        pfp = ManjaroPfp;
        break;
      case "kyemate":
        pfp = KyematePfp;
        break;
      case "zeythar":
        pfp = ZeytharPfp;
        break;
      case "agnes":
        pfp = AgnesPfp;
        break;
      default:
        pfp = null;
    }

    return {
      name: member.name,
      title: member.role,
      pfp: pfp,
      socials: [
        { icon: Github, href: "/" },
        { icon: Linkedin, href: "/" },
      ],
    };
  });

  return (
    <section className="relative bg-extra-strong flex items-center justify-center">
      <div className="mx-auto px-8 py-16 w-full max-w-7xl">
        <div className="flex flex-col items-center gap-8">
          <h2 className="text-4xl font-semibold capitalize">
            <span>{teamData.title1}</span>{" "}
            <span className="text-accent">{teamData.title2}</span>
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full">
            {teamMembers.map((member) => (
              <Card
                key={member.name}
                className="hover:bg-popover/60 transition-all duration-200"
              >
                <CardHeader className="text-center">
                  <div className="h-16 w-16 mx-auto">
                    {member.pfp && (
                      <img
                        src={member.pfp}
                        className="rounded-full"
                        alt={`${member.name}'s profile picture`}
                      />
                    )}
                  </div>
                  <CardTitle>{member.name}</CardTitle>
                  <CardDescription>{member.title}</CardDescription>
                </CardHeader>
                <CardFooter>
                  <ul className="w-full flex flex-row gap-4 justify-center text-foreground">
                    {member.socials.map((social, index) => {
                      const IconComponent = social.icon;
                      return (
                        <li key={index}>
                          <a href={social.href} className="text-center">
                            <IconComponent />
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
