import React, {Component, Fragment} from "react";
import styles from './footer.module.css';
import Link from 'next/link'

export function Footer() {
    return(
        <footer className={`come-in flex--justify-content--center ${styles["footer"]}`}>
            <div className="bx--grid flex flex--justify-content--space-between flex-direction--column">
                <div className="margin--top--layout-05">
                    <p className="expressive-heading-05 color--white">
                      <span>Any questions?</span>
                      &#160;
                      <span className="a--internal hover--opacity">
                        <a href="mailto:contact@wyona.com?subject=Katie" className="color--white">Contact us ...</a>
                      </span>
                    </p>
                </div>
                <section className="margin--bottom--layout-05 margin--top--layout-05">
                    <p className="color--grey-60">&#169; Wyona</p>
                </section>
            </div>
        </footer>
    );
}

export default Footer;
