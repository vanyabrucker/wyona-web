/* props.color=white is for white backgrounds and will render a grey bottom border, black links and a black logo background
* props.color=black is for black backgrounds and will render no grey bottom border, white links and a white logo background*/
import React, {Component, Fragment} from "react";
import Link from 'next/link'

import SearchField from "../search/searchfield";

export function Header(props) {
    return(
        <header className={props.color}>
            <div className="bx--grid flex flex--justify-content--space-between">
                <Link href="/">
                    <div className="hover--pointer hover--opacity logo__container">
                        <a className="margin--top--spacing-04 heading--03 font-weight--700}">WYONA</a>
                    </div>
                </Link>

                <nav className="flex flex--align-items--center">
                    <Link href="mailto:contact@wyona.com">
                        <a className="hover--opacity heading--03 margin--left--layout-05 font-weight--500">Contact</a>
                    </Link>
                    <Link href="/investors">
                        <a className="hover--opacity heading--03 margin--left--layout-05 font-weight--500">Investors</a>
                    </Link>
                </nav>
            </div>
        </header>
    );
}

export default Header;