import styles from "./main.module.css"

export function Main() {
    return(
        <main>
            <div className={`${styles["hero__container"]} flex--align-items--center flex--justify-content--center`}>
                <div className={[styles["halo"], styles["a"]].join(" ")}/>
                <div className={[styles["halo"], styles["b"]].join(" ")}/>
                <div className={[styles["halo"], styles["c"]].join(" ")}/>
                <div className={`${styles["link__container"]} bx--grid`}>
                    <div>
                        <h1 className={"margin--top--spacing-03"}>Hello, we're Wyona. We develop Katie, a hybrid intelligence based bot, to make untapped knowledge accessible. <span className={styles.link}><a href={"https://ukatie.com"}>Learn more</a></span></h1>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Main;
