export interface CookieTypesData {
  title: string;
  subTitle2: string;
  subTitle3: string;
  necessaryCookies: CookieCategory;
  experienceCookies: CookieCategory;
  performanceCookies: CookieCategory;
}


interface CookieItem {
  name: string;
  name_value: string;
  purpose: string;
  purpose_value: string;
  storageTime: string;
  storageTime_value: string;
}

interface CookieCategory {
  text: string;
  list: {
    [key: string]: CookieItem;
  };
}

interface CookieListProps {
  listData: CookieCategory;
  titleText: string;
}

const CookieList = ({ listData, titleText }: CookieListProps) => (
  <div>
    <h3 className="text-3xl">{titleText}</h3>
    <p className="mt-4">{listData.text}</p>
    {Object.values(listData.list).map((item, index) => (
      <ul key={index} className="mt-4">
        <li>
          <b>{item.name}</b> {item.name_value}
        </li>
        <li>
          <b>{item.purpose}</b> {item.purpose_value}
        </li>
        <li>
          <b>{item.storageTime}</b> {item.storageTime_value}
        </li>
      </ul>
    ))}
  </div>
);

export default function CookieTypesSection({
  cookieTypesData,
}: {
  cookieTypesData: CookieTypesData;
}) {
  return (
    <div className="flex flex-col gap-8">
      <CookieList
        listData={cookieTypesData.necessaryCookies}
        titleText={cookieTypesData.title}
      />
      <CookieList
        listData={cookieTypesData.experienceCookies}
        titleText={cookieTypesData.subTitle2}
      />
      <CookieList
        listData={cookieTypesData.performanceCookies}
        titleText={cookieTypesData.subTitle3}
      />
    </div>
  );
}
