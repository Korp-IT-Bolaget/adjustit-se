export interface DataRetentionData {
  title: string;
  text: string;
}

export default function DataRetentionSection({
  dataRetentionData,
}: {
  dataRetentionData: DataRetentionData;
}) {
  return (
    <div>
      <h2 className="text-4xl ">{dataRetentionData.title}</h2>
      <p className="mt-4">{dataRetentionData.text}</p>
    </div>
  );
}