import styles from "./main.module.css"
import Link from 'next/link'

export function Main() {
    return(
        <main>
            <section style={{position: "relative", height: "100vh", width: "100%"}} className="flex--justify-content--center background-color--grey-100">
                <picture>
                    <source srcSet={"/media/hero-gradient.webp"} type="image/webp"/>
                    <source srcSet={"/media/hero-gradient.jp2"} type="image/jp2"/>
                    <source srcSet={"/media/hero-gradient.png"} type="image/png"/>
                    <img className={styles.heroimage} src={"/media/hero-gradient.png"} alt={"blue and red background gradient image"}/>
                </picture>
                <div className={`padding--top--header bx--grid flex flex-wrap--wrap margin--top--layout-07 margin--bottom--layout-06 ${styles.hero}`}>
                    <h1 className="display-01 margin--top--spacing-06 color--white "><span className={"opacity--light"}>Hello, we're Wyona. We develop </span><span className={`a--internal hover--opacity ${styles.hero__a}`}>
                            <Link href="https://ukatie.com" passHref={true}><a className="color--white">Katie</a></Link>
                        </span><span className={"opacity--light"}>, a hybrid intelligence based bot, to support human communication.</span>
                    </h1>
                </div>
            </section>
        </main>
    );
}

export default Main;
