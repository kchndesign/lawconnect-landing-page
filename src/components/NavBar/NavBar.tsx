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
        <div className={Styles.wrapper}>
            <nav className={Styles.navbar} id="navbar">
                {/* logo */}

                <a href="/">
                    <img
                        src={Logo}
                        alt="LawConnect logo"
                        className={Styles.logo}
                    />
                </a>

                {/* ---------------------------- */}
                {/* nav items for larger screens */}
                {/* ---------------------------- */}

                <ul className={`${Styles.navList} ${Styles.desktopNav}`}>
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

                <div className={`${Styles.loginControls} ${Styles.desktopNav}`}>
                    <a href="/">Login</a>
                    <ActionButton text="Create Free Account" />
                </div>

                {/* ----------------------------- */}
                {/* nav items for smaller screens */}
                {/* ----------------------------- */}

                {/* hamburger menu button */}

                <button
                    className={`${Styles.dropdownMenuButton} ${Styles.mobileNav}`}
                    onClick={handleDropdownButtonClick}
                >
                    <img src={MenuIcon} alt="Menu" />
                </button>

                {/* Wrapper for the dropdown menu */}

                <div
                    className={`${Styles.dropdownMenu} 
                        ${
                            // conditional statement to set class when menu is toggled.
                            isDisplayDropdown
                                ? Styles["dropdownMenu--display"]
                                : ""
                        } ${Styles.mobileNav}`}
                >
                    {/* Unordered List for the dropdown menu */}

                    <ul className={Styles.dropdownList}>
                        <li>
                            <a href="/" className={Styles.dropdownLink}>
                                For People
                            </a>
                        </li>
                        <li>
                            <a href="/" className={Styles.dropdownLink}>
                                For Businesses
                            </a>
                        </li>
                        <li>
                            <a href="/" className={Styles.dropdownLink}>
                                Contact
                            </a>
                        </li>
                        <li>
                            <a href="/" className={Styles.dropdownLink}>
                                Login
                            </a>
                        </li>
                        <li className={Styles.dropdownLink}>
                            <ActionButton text="Create Free Account" />
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default NavBar;
