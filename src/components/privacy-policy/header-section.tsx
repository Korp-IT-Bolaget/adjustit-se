export interface HeaderData {
  title: string;
  updated: string;
}

export default function HeaderSection({
  headerData,
}: {
  headerData: HeaderData;
}) {
  return (
    <div>
      <h1 className="text-4xl md:text-5xl">{headerData.title}</h1>
      <h2 className="mt-4 italic">{headerData.updated}</h2>
    </div>
  );
}
