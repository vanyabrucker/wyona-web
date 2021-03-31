import styles from "./main.module.css"

export function Main() {
    return(
        <main>
            <section style={{position: "relative", height: "100vh", width: "100%"}} className="flex--justify-content--center background-color--grey-100">
                <img className={styles.heroimage} src={"/media/hero-gradient.png"}></img>
                <div className={`padding--top--header bx--grid flex flex-wrap--wrap margin--top--layout-07 margin--bottom--layout-06 ${styles.hero}`}>
                    <h1 className="display-01 margin--top--spacing-06 color--white "><span className={"opacity--light"}>Hello, we're Wyona. We develop </span><span className={`a--internal hover--opacity ${styles.hero__a}`}>
                            <a href="ukatie.com" className="color--white">Katie</a>
                        </span><span className={"opacity--light"}>, a hybrid intelligence based bot, to support human communication.</span>
                    </h1>
                </div>
            </section>
        </main>
    );
}

export default Main;