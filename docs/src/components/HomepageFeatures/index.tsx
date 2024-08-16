import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";
import Link from "@docusaurus/Link";
import Translate from "@docusaurus/core/lib/client/exports/Translate";

type DocumentationItem = {
  title: string;
  description: JSX.Element;
};

const DocumentationList: DocumentationItem[] = [
  {
    title: "API Documentation",
    description: (
      <>
        <Translate>La documentation de l'API d'EnVRonment est disponible à cette addresse:</Translate>{" "}
        <Link to={"https://api.docs.envronment.com"}>
          <Translate>https://api.docs.envronment.com</Translate>
        </Link>
      </>
    ),
  },
  {
    title: "Frontend Documentation",
    description: (
      <>
        <Translate>La documentation du Frontend d'EnVRonment est disponible à cette addresse:</Translate>{" "}
        <Link to={"https://frontend.docs.envronment.com"}>
          <Translate>https://frontend.docs.envronment.com</Translate>
        </Link>
      </>
    ),
  },
  {
    title: "Landing Page Documentation",
    description: (
      <>
        <Translate>La documentation de la Landing Page d'EnVRonment est disponible à cette addresse:</Translate>{" "}
        <Link to={"https://landing-page.docs.envronment.com"}>
          <Translate>https://landing-page.docs.envronment.com</Translate>
        </Link>
      </>
    ),
  },
  {
    title: "Editor Documentation",
    description: (
      <>
        <Translate>La documentation de l'Editeur d'EnVRonment est disponible à cette addresse:</Translate>{" "}
        <Link to={"https://editor.docs.envronment.com"}>
          <Translate>https://editor.docs.envronment.com</Translate>
        </Link>
      </>
    ),
  },
  {
    title: "Editor Hub Documentation",
    description: (
      <>
        <Translate>La documentation de l'Editeur Hub d'EnVRonment est disponible à cette addresse:</Translate>{" "}
        <Link to={"https://editor-hub.docs.envronment.com"}>
          <Translate>https://editor-hub.docs.envronment.com</Translate>
        </Link>
      </>
    ),
  },
  {
    title: "VR Documentation",
    description: (
      <>
        <Translate>La documentation du Simulateur d'EnVRonment est disponible à cette addresse:</Translate>{" "}
        <Link to={"https://vr.docs.envronment.com"}>
          <Translate>https://vr.docs.envronment.com</Translate>
        </Link>
      </>
    ),
  },
];

const DocumentationLink = ({ title, description }: DocumentationItem) => (
  <div className={clsx("col col--4")}>
    <div className="text--center padding-horiz--md">
      <Heading as="h3">{title}</Heading>
      <p>{description}</p>
    </div>
  </div>
);

export default function HomepageDocumentations(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {DocumentationList.map((props, idx) => (
            <DocumentationLink key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
