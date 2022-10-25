// feature card image imports
import SafeDocs from "../assets/images/lc-safe-docs.jpg";
import WorkRemote from "../assets/images/lc-work-remote.jpg";
import GreaterCollab from "../assets/images/lc-greater-collab.jpg";

export type FeatureCardData = {
    imgSrc: string;
    title: string;
    description: string;
};

export const featureCardsData: FeatureCardData[] = [
    {
        imgSrc: SafeDocs,
        title: "Safe Documents",
        description:
            "LawConnect stores its data on servers provided by Amazon Web Services and is safer than email.",
    },

    {
        imgSrc: WorkRemote,
        title: "Work remotely",
        description:
            "You can sign in to LawConnect and view, collaborate and share your documents from anywhere.",
    },

    {
        imgSrc: GreaterCollab,
        title: "Greater Collaboration",
        description:
            "Collaborate on documents with clients, lawyers and other parties with LawConnect's Comment and Reply.",
    },
];
