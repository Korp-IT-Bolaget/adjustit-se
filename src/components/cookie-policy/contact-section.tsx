import { Link } from "react-router-dom";

interface ContactData {
  title: string;
  text: string;
  emailLabel: string;
  emailAddress: string;
}

export default function ContactSection({
  contactData,
}: {
  contactData: ContactData;
}) {
  return (
    <div>
      <h2 className="text-4xl">{contactData.title}</h2>
      <p className="mt-4">{contactData.text}</p>
      <p className="mt-2">
        <b>{contactData.emailLabel}</b>{" "}
        <Link
          to={`mailto:${contactData.emailAddress}`}
          className="text-sky-700"
        >
          {contactData.emailAddress}
        </Link>
      </p>
    </div>
  );
}
