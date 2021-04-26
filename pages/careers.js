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
                <meta name="description" content="Wyona investors page" />
            </Head>
            <Header color={"white"}/>
            <main className="padding--top--header margin--bottom--layout-06">
                <section className="margin--top--layout-06 flex-direction--column flex--align-items--center">
                    <div className="bx--grid flex-direction--column">
                        <h1 className="margin--top--spacing-04 expressive-heading-05">Join Wyona</h1>
                        <p className="margin--top--spacing-06 text-length--02">
                            We’re hiring talented people in a variety of roles across the spectrum to join our team in Zurich or remotely.
                        </p>
                        <h2 className={"expressive-heading-04 margin--top--layout-05"}>Open positions</h2>
                        <ul className="ul--no-styles flex flex-wrap--wrap flex-direction--column margin--top--spacing-06">
                            <PostItem id={"ui-designer"} subtitle={"Remote"} title={"User Interface Designer"}></PostItem>
                            <PostItem id={"ux-designer"} subtitle={"Remote"} title={"User Experience Designer"}></PostItem>
                            <PostItem id={"marketing-specialist"} subtitle={"Remote"} title={"Marketing specialist"}></PostItem>
                        </ul>
                    </div>
                </section>
            </main>
            <Footer/>
        </>
    )
}
