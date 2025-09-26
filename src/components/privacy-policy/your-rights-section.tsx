export interface YourRightsData {
  title: string;
  introText: string;
  list: {
    [key: string]: RightItem;
  };
}

interface RightItem {
  title: string;
  text: string;
}

export default function YourRightsSection({
  yourRightsData,
}: {
  yourRightsData: YourRightsData;
}) {
  return (
    <div>
      <h2 className="text-4xl">{yourRightsData.title}</h2>
      <p className="mt-4">{yourRightsData.introText}</p>
      <ul className="mt-4 list-disc list-inside">
        {Object.entries(yourRightsData.list).map(([key, item]) => (
          <li key={key}>
            <b>{item.title}</b> {item.text}
          </li>
        ))}
      </ul>
    </div>
  );
}
