import Head from 'next/head'

import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'

/* Component imports */
import GlobalHead from "../components/head/globalhead";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import PostItem from "../components/postitem/postitem";

export async function getStaticProps() {
    const allPostsData = getSortedPostsData()
    return {
        props: {
            allPostsData
        }
    }
}

export default function Investors({ allPostsData }) {
    return (
        <>
            <Head>
                <GlobalHead/>
                <title>Careers – Wyona</title>
                <meta name="description" content="Wyona careers / hiring / jobs page" />
            </Head>
            <Header color={"white"}/>
            <main className="padding--top--header margin--bottom--layout-06">
                <section className="margin--top--layout-06 flex-direction--column flex--align-items--center">
                    <div className="bx--grid flex-direction--column">
                        <h1 className="margin--top--spacing-04 expressive-heading-05">Join Wyona</h1>
                        <p className="margin--top--spacing-06 text-length--02">
                            Together, we are developing <span><a className={"a--internal"} href="https://ukatie.com">Katie</a></span>. Our ambition is to develop a QnA / Knowledge management bot which goes beyond providing intuitive answers to questions. Join and help us raise the standards of natural language processing and understanding.
                        </p>
                        <p className="margin--top--spacing-06 text-length--02">
                          Hiring Process:
                        </p>
                        <br/>
                        <ul>
                          <li>Submit your application and chat with us about your values, abilities and skills</li>
                          <li>Two paid take-home projects (1. Follow a recipe, 2. Create your own recipe)</li>
                          <li>Meet the team</li>
                          <li>Work together</li>
                        </ul>

                        <h2 className={"expressive-heading-04 margin--top--layout-05"}>Open positions</h2>
                        <ul className="ul--no-styles flex flex-wrap--wrap flex-direction--column margin--top--spacing-06">
                            <PostItem id={"nlp-nlu-research-software-engineer"} subtitle={"Full Time"} title={"NLP / NLU Research Software Engineer"}></PostItem>
                            <PostItem id={"ui-designer"} subtitle={"Full Time"} title={"UX / Angular Developer"}></PostItem>
                            <PostItem id={"ui-designer"} subtitle={"Part Time"} title={"Visual / Graphic Designer"}></PostItem>
                        </ul>
                    </div>
                </section>
            </main>
            <Footer/>
        </>
    )
}
