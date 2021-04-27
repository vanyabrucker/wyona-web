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
                            <p>Our ambition is to develop a QnA / Knowledge management bot which goes beyond providing intuitive answers to questions.</p>
                            <p className="margin--top--spacing-06">The Research Engineer role is responsible for building NLP / NLU systems that can perform previously impossible tasks or achieve unprecedented levels of performance. This requires good engineering (for example designing, implementing, and improving a massive-scale distributed machine learning system), writing bug-free machine learning code, and building the science behind the algorithms employed.</p>
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
