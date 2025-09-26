export interface DataProcessingData {
  title: string;
  introText: string;
  list: {
    [key: string]: DataProcessingListItem;
  };
}

interface DataProcessingListItem {
  title: string;
  text: string;
}

export default function DataProcessingSection({
  dataProcessingData,
}: {
  dataProcessingData: DataProcessingData;
}) {
  return (
    <div>
      <h2 className="text-3xl md:text-4xl">{dataProcessingData.title}</h2>
      <p className="mt-4">{dataProcessingData.introText}</p>
      <ul className="mt-4 list-disc list-inside">
        {Object.entries(dataProcessingData.list).map(([key, item]) => (
          <li key={key}>
            <b>{item.title}</b> {item.text}
          </li>
        ))}
      </ul>
    </div>
  );
}
