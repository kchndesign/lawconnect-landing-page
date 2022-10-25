import { FeatureCardData } from "../../data/feature-cards";

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
        <div className="Styles.Card">
            <h1>hello</h1>
        </div>
    );
}

export default Card;
