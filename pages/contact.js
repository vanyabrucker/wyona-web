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
                <title>Contact – Wyona</title>
                <meta name="description" content="Contact" />
            </Head>
            <Header color={"white"}/>
            <main className="padding--top--header margin--bottom--layout-06">
                <section className="margin--top--layout-06 flex-direction--column flex--align-items--center">
                    <div className="bx--grid flex-direction--column">
                        {/*<p className="margin--top--spacing-04">Contact</p>*/}
                        <p className="margin--top--spacing-06 text-length--02">
                            Contact
                        </p>
                        <a href="mailto:contact@wyona.com" className="color--grey-90 a--internal">
                            <h1 className="margin--top--spacing-06 color--grey-90">contact@wyona.com</h1>
                        </a>
                        <h1 className="margin--top--spacing-06 color--grey-90">Doldertal 19<br/>8032 Zürich<br/>Switzerland</h1>
                    </div>
                </section>
            </main>
            <Footer/>
        </>
    )
}
