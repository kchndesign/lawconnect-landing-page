import ActionButton from "./components/ActionButton/ActionButton";
import NavBar from "./components/NavBar/NavBar";
import "./LandingPage.scss";
import Card from "./components/Card/Card";

// hero asset imports
import HeroMobile from "./assets/images/lc-hero-mobile.png";
import HeroMobile2x from "./assets/images/lc-hero-mobile@2x.png";
import HeroDesktop from "./assets/images/lc-hero-desktop.png";
import HeroDesktop2x from "./assets/images/lc-hero-desktop@2x.png";

// sharing documents asset imports
import ShareDocs from "./assets/images/lc-share-docs.png";
import ShareDocs2x from "./assets/images/lc-share-docs@2x.png";

// signing docucments asset imports
import SignDocsMobile from "./assets/images/lc-sign-docs-mobile.png";
import SignDocsMobile2x from "./assets/images/lc-sign-docs-mobile@2x.png";
import SignDocsDesktop from "./assets/images/lc-sign-docs-desktop.png";

// import feature cards data
import { featureCardsData } from "./data/feature-cards";

function LandingPage(): JSX.Element {
    return (
        <>
            <NavBar />

            {/* --------------------- */}
            {/*      Hero section     */}
            {/* --------------------- */}

            <div className="section__wrapper" id="heroSectionWrapper">
                <section className="section section--side-by-side">
                    {/* Hero section text content */}

                    <div className="section__text" id="heroTextContent">
                        <h1 id="heroTitle">
                            The place to work with your lawyer
                        </h1>

                        <p id="heroText">
                            Your lawyer uses LawConnect to share information
                            with you about your legal case in a private,
                            convenient and secure way.
                        </p>

                        <ActionButton
                            text="Create Free Account"
                            id="heroButton"
                        />
                    </div>

                    {/* Hero section images */}

                    <div className="section__image" id="heroImage">
                        <picture>
                            {/* mobile source */}
                            <source
                                media="(max-width: 864px)"
                                sizes="(max-width: 400px) 285px, 570px"
                                srcSet={`${HeroMobile} 285w, ${HeroMobile2x} 570w`}
                            />
                            {/* desktop source */}
                            <source
                                media="(min-width: 865px)"
                                sizes="(max-width: 960px) 656px, 1312px"
                                srcSet={`${HeroDesktop} 656w, ${HeroDesktop2x} 1312w`}
                            />
                            {/* fallback image */}
                            <img
                                src={HeroMobile2x}
                                alt="A screenshot of the application and two professionals"
                            />
                        </picture>
                    </div>
                </section>
            </div>

            {/* --------------------- */}
            {/* Feature cards section */}
            {/* --------------------- */}

            <div className="section">
                <h2 className="text-centre">
                    One Solution Designed to Make Your Firm More Money
                </h2>

                <div className="card-container">
                    {/* render a card for every FeatureCardData entity in array */}
                    {featureCardsData.map((cardData, index) => {
                        return <Card featureCardData={cardData} key={index} />;
                    })}
                </div>
            </div>

            {/* ------------------------- */}
            {/* Sharing Documents section */}
            {/* ------------------------- */}

            <div className="section__wrapper--off-white">
                <div className="section section--side-by-side">
                    {/* Sharing documents -> text content */}

                    <div className="section__text">
                        <h2>Sharing Documents</h2>
                        <p>
                            Your lawyer will share documents related to your
                            case with you, via LawConnect. Each time a document
                            is shared by your lawyer, you will receive an email
                            notification so you can access the document.
                        </p>

                        <p>
                            If you already have a LawConnect account, you can
                            login and an alert will be in your notifications tab
                            that a document has been shared.
                        </p>
                    </div>

                    {/* sharing documents -> images */}

                    <div className="section__image">
                        <img
                            srcSet={`${ShareDocs} 438w, ${ShareDocs2x} 875w`}
                            sizes="(max-width: 864px) 438px, 875px"
                            alt="Person in cafe on phone with email and notification icons."
                        />
                    </div>
                </div>
            </div>

            {/* ------------------------- */}
            {/* Signing documents section */}
            {/* ------------------------- */}

            <div className="section section--side-by-side">
                {/* signing documents -> images */}

                <div className="section__image">
                    <picture>
                        {/* mobile source */}

                        <source
                            media="(max-width: 864px)"
                            sizes="(max-width: 375px) 248px, 496px"
                            srcSet={`${SignDocsMobile} 248w, ${SignDocsMobile2x} 596w`}
                        />

                        {/* desktop source */}

                        <source
                            media="(min-width: 865px)"
                            srcSet={`${SignDocsDesktop}`} // no point having the 2x here, it never gets big enough
                        />

                        {/* fallback image */}

                        <img
                            src={SignDocsMobile2x}
                            alt="A screenshot of DocuSign being used in the LawConnect App"
                        />
                    </picture>
                </div>

                {/* Signing documents -> text content */}

                <div className="section__text">
                    <h2>Signing Documents Electronically</h2>
                    <p>
                        LawConnect integrates with DocuSign to provide our users
                        with a quick, easy and secure way to sign important
                        legal documents online.
                    </p>
                </div>
            </div>

            {/* ------------------------- */}
            {/*          Footer           */}
            {/* ------------------------- */}

            <div className="footer"></div>
        </>
    );
}

export default LandingPage;
