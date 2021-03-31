import styles from "./main.module.css"

export function Main() {
    return(
        <main>
            <section style={{position: "relative", height: "100vh", width: "100%"}} className="flex--justify-content--center background-color--grey-100">
                <img className={styles.heroimage} src={"/media/hero-gradient.png"}></img>
                <div className={`padding--top--header bx--grid flex flex-wrap--wrap margin--top--layout-07 margin--bottom--layout-06 ${styles.hero}`}>

                    <h1 className="display-01 margin--top--spacing-06 color--white">Hello, we're Wyona. We develop <span
                        className="a--internal hover--opacity">
                        <a href="mailto:michael.wechner@wyona.com" className="color--white">Katie</a></span>, a hybrid intelligence based bot, to support human communication.</h1>

                </div>
            </section>
        </main>
    );
}

export default Main;