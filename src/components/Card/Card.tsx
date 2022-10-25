import { FeatureCardData } from "../../data/feature-cards";
import Styles from "./Card.module.scss";

// declare card props
type CardProps = {
    featureCardData: FeatureCardData;
};

/**
 * Displays a card with an image, title and text content
 * @param props Takes a FeatureCard entity
 * @returns a card
 */

function Card(props: CardProps): JSX.Element {
    return (
        <div className={Styles.card}>
            {/* image */}

            <img
                src={props.featureCardData.imgSrc}
                alt={props.featureCardData.imgAlt}
                className={Styles.image}
            />

            {/* text is wrapped in a box for padding */}

            <div className={Styles.contentBox}>
                {/* title */}

                <h3 className={Styles.title}>{props.featureCardData.title}</h3>

                {/* description */}

                <p className={Styles.description}>
                    {props.featureCardData.description}
                </p>
            </div>
        </div>
    );
}

export default Card;
