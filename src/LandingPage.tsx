import ActionButton from "./components/ActionButton/ActionButton";
import NavBar from "./components/NavBar/NavBar";
import "./LandingPage.scss";

function LandingPage(): JSX.Element {
    return (
        <>
            <NavBar />

            {/* 
            
            
            
            
            Hero section
            
            
            
            
            
            */}

            <section className="section section--side-by-side">
                <div className="section__text">
                    <h1>The place to work with your lawyer</h1>
                    <p>
                        Your lawyer uses LawConnect to share information with
                        you about your legal case in a private, convenient and
                        secure way.
                    </p>
                    <ActionButton text="Create Free Account" />
                </div>
                <div className="section__image">
                    <img src="" alt="" />
                </div>
            </section>
        </>
    );
}

export default LandingPage;
