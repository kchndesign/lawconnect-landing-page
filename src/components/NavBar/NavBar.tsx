// import Logo from "./assets/logos/LawConnect-logo-reverse-RGB.png";
import Logo from "../../assets/logos/LawConnect-logo-reverse-RGB.svg";
import ActionButton from "../ActionButton/ActionButton";
import Styles from "./NavBar.module.scss";

function NavBar() {
    return (
        <nav className={Styles.navbar}>
            {/* logo */}
            <img
                src={Logo}
                alt="LawConnect logo"
                className={Styles.navbar__logo}
            />

            {/* nav items */}
            <ul className={Styles.navbar__navList}>
                <li>
                    <a href="#">For People</a>
                </li>
                <li>
                    <a href="#">For Businesses</a>
                </li>
                <li>
                    <a href="#">Contact</a>
                </li>
            </ul>

            {/* login controls */}
            <div className={Styles.navbar__loginControls}>
                <a href="#">Login</a>
                <ActionButton text="Create Free Account" />
            </div>
        </nav>
    );
}

export default NavBar;
