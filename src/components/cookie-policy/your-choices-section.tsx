export interface YourChoicesData {
  title: string;
  text: string;
}

export default function YourChoicesSection({
  yourChoicesData,
}: {
  yourChoicesData: YourChoicesData;
}) {
  return (
    <div>
      <h2 className="text-4xl">{yourChoicesData.title}</h2>
      <p className="mt-4">{yourChoicesData.text}</p>
    </div>
  );
}
