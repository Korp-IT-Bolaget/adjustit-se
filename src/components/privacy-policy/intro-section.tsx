export interface IntroData {
  text: string;
}

export default function IntroSection({ introData }: { introData: IntroData }) {
  return <p>{introData.text}</p>;
}
