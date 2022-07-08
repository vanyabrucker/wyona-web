import Head from 'next/head'

/* Component imports */
import GlobalHead from "../components/head/globalhead";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";

export default function Contact() {
    return (
        <>
            <Head>
                <GlobalHead/>
                <title>About – Wyona</title>
                <meta name="description" content="Invest overview page" />
            </Head>
            <Header color={"white"}/>
            <main className="padding--top--header margin--bottom--layout-06">
                <section className="margin--top--layout-06 flex-direction--column flex--align-items--center">
                    <div className="bx--grid flex-direction--column">
                        {/*<p className="margin--top--spacing-04">Contact</p>*/}
                        <h1 className="margin--top--spacing-06 text-length--02">
                            About
                        </h1>
                        <p className="margin--top--spacing-06 body-text text-length--02 color--grey-90">Wyona was founded in the year 2000 to develop software. We are an experienced and passionate team headquartered in Zurich, Switzerland.<br/><br/>Today, our main product is <span><a className={"a--internal--body-text"} href={"https://ukatie.com/"}>Katie</a></span>, a hybrid intelligence based bot to support human communication and make untapped knowledge accessible.</p>
                    </div>
                </section>
            </main>
            <Footer/>
        </>
    )
}
