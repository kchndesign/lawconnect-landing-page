import ActionButton from "./components/ActionButton/ActionButton";
import NavBar from "./components/NavBar/NavBar";
import HeroMobile from "./assets/images/lc-hero-mobile.png";
import HeroMobile2x from "./assets/images/lc-hero-mobile@2x.png";
import HeroDesktop from "./assets/images/lc-hero-desktop.png";
import HeroDesktop2x from "./assets/images/lc-hero-desktop@2x.png";
import "./LandingPage.scss";

function LandingPage(): JSX.Element {
    return (
        <>
            <NavBar />

            {/* 
            
            
            
            
            Hero section
            
            
            
            
            
            */}

            <div className="section__wrapper" id="heroSectionWrapper">
                <div id="heroSectionCircleLarger"></div>
                <div id="heroSectionCircleSmaller"></div>
                <section className="section section--side-by-side">
                    {/* 
                    
                    Hero section text content
                    
                    */}
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

                    {/* 
                    
                    Hero section images

                    */}

                    <div className="section__image" id="heroImage">
                        <picture>
                            {/* mobile source */}
                            <source
                                media="(max-width: 864px)"
                                sizes="(max-width: 400px) 285px, 570px"
                                srcSet={`${HeroMobile}, ${HeroMobile2x}`}
                            />
                            {/* desktop source */}
                            <source
                                media="(min-width: 865px)"
                                sizes="(max-width: 960px) 656px, 1312px"
                                srcSet={`${HeroDesktop}, ${HeroDesktop2x}`}
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
        </>
    );
}

export default LandingPage;
