export interface WhatCookiesDoWeUseData {
  title: string;
  text: string;
}

export default function WhatCookiesDoWeUseSection({
  whatCookiesDoWeUseData,
}: {
  whatCookiesDoWeUseData: WhatCookiesDoWeUseData;
}) {
  return (
    <div>
      <h2 className="text-4xl">{whatCookiesDoWeUseData.title}</h2>
      <p className="mt-4">{whatCookiesDoWeUseData.text}</p>
    </div>
  );
}
