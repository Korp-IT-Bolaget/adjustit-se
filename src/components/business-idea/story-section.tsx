import { Card, CardDescription, CardHeader } from "@/components/ui/card";
import {
  Feather,
  Code,
  Users,
  ThumbsUp,
  HeartHandshake,
  Rocket,
  type LucideIcon,
} from "lucide-react";

export interface StoryData {
  title1: string;
  title2: string;
  cards: StoryCards;
}

interface StoryCard {
  title: string;
  text: string;
}

interface StoryCards {
  card1: StoryCard;
  card2: StoryCard;
  card3: StoryCard;
  card4: StoryCard;
  card5: StoryCard;
  card6: StoryCard;
}

const cardIcons: { [key: string]: LucideIcon } = {
  card1: Feather,
  card2: Code,
  card3: Users,
  card4: ThumbsUp,
  card5: HeartHandshake,
  card6: Rocket,
};

export default function StorySection({ storyData }: { storyData: StoryData }) {
  const cardsArray = Object.values(storyData.cards);

  const groupedCards = [];
  for (let i = 0; i < cardsArray.length; i += 2) {
    groupedCards.push(cardsArray.slice(i, i + 2));
  }

  return (
    <section>
      <div className="mx-auto px-8 pt-8 pb-16 w-full max-w-7xl">
        <h2 className="text-4xl font-semibold mb-8">
          {storyData.title1}{" "}
          <span className="text-accent">{storyData.title2}</span>
        </h2>
        <div className="flex flex-col gap-4">
          {groupedCards.map((pair, index) => (
            <div key={index} className="flex lg:flex-row flex-col gap-4">
              {pair.map((card, cardIndex) => {
                const iconKeys = Object.keys(storyData.cards);
                const currentIconKey = iconKeys[index * 2 + cardIndex];
                const IconComponent = cardIcons[currentIconKey];

                return (
                  <Card
                    key={card.title} // A stable key is important
                    className="w-full lg:w-1/2 hover:bg-popover/60 transition-all duration-200"
                  >
                    <CardHeader>
                      <div className="bg-border/80 w-fit rounded-md p-3 mb-4">
                        {IconComponent && (
                          <IconComponent className="text-accent" />
                        )}
                      </div>
                      <h2 className="text-lg font-semibold">{card.title}</h2>
                      <CardDescription>
                        <p className="text-sm">{card.text}</p>
                      </CardDescription>
                    </CardHeader>
                  </Card>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
