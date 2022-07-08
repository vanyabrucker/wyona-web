/* props.color=white is for white backgrounds and will render a grey bottom border, black links and a black logo background
* props.color=black is for black backgrounds and will render no grey bottom border, white links and a white logo background*/
import Link from 'next/link'
import styles from "./header.module.css"
import {useState} from "react";


export function Header(props) {


    const [navOn, setNavOn] = useState(false); // null = mounted, true = on, false = off

    const toggleNav = () => {
        setNavOn((prevState) => !prevState)
    }


    return(
        <>
            <header className={navOn ? "nav__open" : "nav__closed"}>
                <div className="bx--grid flex flex--justify-content--space-between">
                    <Link href="/">
                        <div className="hover--pointer hover--opacity logo__container">
                            <a>
                                WYONA
                            </a>
                        </div>
                    </Link>

                    <nav className="flex flex--align-items--center">
                        <button className={styles.nav__toggle} onClick={toggleNav}>
                            <span className={[styles.nav__toggle__line, navOn ? styles["nav__toggle__line_upper--open"] : styles["nav__toggle__line_upper--closed"]].join(" ")}/>
                            <span className={[styles.nav__toggle__line, navOn ? styles["nav__toggle__line_lower--open"] : styles["nav__toggle__line_lower--closed"]].join(" ")}/>
                        </button>
                    </nav>
                </div>
            </header>
            <nav
                className={[styles["nav"], "flex", "flex--justify-content--center", styles[navOn ? "nav--true" : "nav--false"]].join(" ")}>
                <div className={"bx--grid flex nav__container"}>
                    <ul>
                        <li key={1}>
                            <Link href="/about">
                                <h1 className={"a--internal color--white"}>About</h1>
                            </Link>
                        </li>
                        <li key={1}>
                            <Link href="/contact">
                                <h1 className={"a--internal color--white margin--top--spacing-04"}>Contact</h1>
                            </Link>
                        </li>
                        <li key={3}>
                            <p className={"a--internal color--grey-50 margin--top--layout-04 minion"}>
                                Privacy Policy
                            </p>
                        </li>
                    </ul>
                </div>
            </nav>
        </>

    );
}

export default Header;
