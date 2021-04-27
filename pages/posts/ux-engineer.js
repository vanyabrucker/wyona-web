import Head from "next/head";
import GlobalHead from "../../components/head/globalhead";
import Header from "../../components/header/header";
import ArticleSection from "../../components/article/article";
import Footer from "../../components/footer/footer";
import Date from "../../components/date/date";

export default function JobDescription() {
    return (
        <>
            <Head>
                <GlobalHead/>
                <title>"UX Engineer / Angular" - Wyona</title>
                <meta name="description" content="Wyona software development" />
            </Head>
            <Header color={"white"}></Header>
            <main className="padding--top--header margin--top--layout-06 margin--bottom--layout-06">
                <article className="flex-direction--column flex--align-items--center">
                    <div className="bx--grid flex-direction--column flex--align-items--center">
                        <h1 className="expressive-heading-05 col-7">UX Engineer / Angular</h1>
                        <div className="col-7 margin--top--spacing-07">
                            <p>Katie is a hybrid intelligence based bot, which means humans are continuously helping the AI to improve. Our ambition is to make this feedback loop as simple and as intuitive as possible.</p>
                            <p className="margin--top--spacing-06">The UX Engineer role is responsible for building the front end of Katie that people love to use. We strive to learn and understand our users’ needs, behaviors, and emotions to gather insights that inform product strategy and design. Your creativity, analytical skills, and knowledge of user facing technologies will help to launch Katie to a global audience.</p>
                            <p className="margin--top--spacing-06 text-length--02">
                                Apply at <span><a className={"a--internal"} href="mailto:contact@wyona.com?subject=Career">contact@wyona.com</a></span>.
                            </p>
                        </div>
                    </div>
                </article>
            </main>
            <Footer></Footer>
        </>
    )
}
