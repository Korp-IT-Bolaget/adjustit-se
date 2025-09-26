import { Link } from "react-router-dom";

export interface DataCollectionData {
  title: string;
  introText: string;
  list: {
    [key: string]: DataListItem;
  };
}

interface DataListItem {
  title: string;
  text: string;
  cookiePolicyLinkText?: string;
}

export default function DataCollectionSection({
  dataCollectionData,
}: {
  dataCollectionData: DataCollectionData;
}) {
  return (
    <div>
      <h2 className="text-3xl md:text-4xl">{dataCollectionData.title}</h2>
      <p className="mt-4">{dataCollectionData.introText}</p>
      <ul className="mt-4 list-disc list-inside">
        {Object.entries(dataCollectionData.list).map(([key, item]) => (
          <li key={key}>
            <b>{item.title}</b> {item.text}{" "}
            {item.cookiePolicyLinkText && (
              <Link to="/cookie-policy" className="text-sky-700">
                {item.cookiePolicyLinkText}
              </Link>
            )}
            .
          </li>
        ))}
      </ul>
    </div>
  );
}
