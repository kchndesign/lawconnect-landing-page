import { useState } from "react";
import Logo from "../../assets/logos/LawConnect-logo-reverse-RGB.svg";
import MenuIcon from "../../assets/icons/menu-icon.svg";
import ActionButton from "../ActionButton/ActionButton";
import Styles from "./NavBar.module.scss";

/**
 * The navbar component handles burger menus at smaller screens as well as dynamic background colors when scrolled down.
 * @returns A Navbar
 */

function NavBar(): JSX.Element {
    const [isDisplayDropdown, setIsDisplayDropdown] = useState(false);

    /**
     * When dropdown button is clicked, toggle isDisplayDropdown.
     */
    function handleDropdownButtonClick() {
        setIsDisplayDropdown(!isDisplayDropdown);
    }

    return (
        <div className={Styles.navbarWrapper}>
            <nav className={Styles.navbar} id="navbar">
                {/* logo */}
                <a href="/">
                    <img
                        src={Logo}
                        alt="LawConnect logo"
                        className={Styles.navbar__logo}
                    />
                </a>
                {/* ---------------------------- */}
                {/* nav items for larger screens */}
                {/* ---------------------------- */}
                <ul
                    className={`${Styles.navbar__navList} ${Styles.desktopNav}`}
                >
                    <li>
                        <a href="/">For People</a>
                    </li>
                    <li>
                        <a href="/">For Businesses</a>
                    </li>
                    <li>
                        <a href="/">Contact</a>
                    </li>
                </ul>
                {/* login controls */}
                <div
                    className={`${Styles.navbar__loginControls} ${Styles.desktopNav}`}
                >
                    <a href="/">Login</a>
                    <ActionButton text="Create Free Account" />
                </div>
                {/* ----------------------------- */}
                {/* nav items for smaller screens */}
                {/* ----------------------------- */}
                {/* hamburger menu button */}
                <button
                    className={`${Styles.navbar__dropdownMenuButton} ${Styles.mobileNav}`}
                    onClick={handleDropdownButtonClick}
                >
                    <img src={MenuIcon} alt="Menu" />
                </button>
                {/* Wrapper for the dropdown menu */}
                <div
                    className={`${Styles.navbar__dropdownMenu} ${
                        // conditional statement to set class when menu is toggled.
                        isDisplayDropdown
                            ? Styles["navbar__dropdownMenu--display"]
                            : ""
                    } ${Styles.mobileNav}`}
                >
                    {/* Unordered List for the dropdown menu */}
                    <ul className={Styles.navbar__dropdownList}>
                        <li>
                            <a href="/" className={Styles.navbar__dropdownLink}>
                                For People
                            </a>
                        </li>
                        <li>
                            <a href="/" className={Styles.navbar__dropdownLink}>
                                For Businesses
                            </a>
                        </li>
                        <li>
                            <a href="/" className={Styles.navbar__dropdownLink}>
                                Contact
                            </a>
                        </li>
                        <li>
                            <a href="/" className={Styles.navbar__dropdownLink}>
                                Login
                            </a>
                        </li>
                        <li className={Styles.navbar__dropdownLink}>
                            <ActionButton text="Create Free Account" />
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default NavBar;
