import styles from './footer.module.css';

/* Component imports */

export function Footer() {
    return(
        <footer className={`come-in flex--justify-content--center ${styles["footer"]}`}>
            <div className="bx--grid flex flex--justify-content--space-between flex-direction--column">
                <div className="margin--top--layout-05">
                    <p className="expressive-heading-04 color--white">
                      <span className="a--internal">
                        <a href="mailto:contact@wyona.com" className="color--white">contact@wyona.com</a>
                      </span>
                    </p>
                </div>
                <section className="margin--bottom--layout-05 margin--top--layout-05">
                    <p className="color--grey-60">Fritz-Fleiner-Weg 9<br/>8044 Zürich<br/> Schweiz</p>
                </section>
            </div>
        </footer>
    );
}

export default Footer;
