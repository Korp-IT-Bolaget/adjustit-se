interface WhatAreCookiesData {
  title: string;
  text: string;
}

export default function WhatAreCookiesSection({
  whatAreCookiesData,
}: {
  whatAreCookiesData: WhatAreCookiesData;
}) {
  return (
    <div>
      <h2 className="text-4xl">{whatAreCookiesData.title}</h2>
      <p className="mt-4">{whatAreCookiesData.text}</p>
    </div>
  );
}
