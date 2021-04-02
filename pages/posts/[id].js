
import { getAllPostIds, getPostData } from '../../lib/posts'
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import ArticleSection from "../../components/article/article";
import GlobalHead from "../../components/head/globalhead";
import Head from "next/head";

export async function getStaticProps({ params }) {
    const postData = await getPostData(params.id)
    return {
        props: {
            postData
        }
    }
}

export async function getStaticPaths() {
    const paths = getAllPostIds()
    return {
        paths,
        fallback: false
    }
}

export default function Post({ postData }) {
    return (
        <>
            <Head>
                <GlobalHead/>
                <title>{postData.title} - Wyona</title>
                <meta name="description" content="Wyona software development" />
            </Head>
            <Header color={"white"}></Header>
            <ArticleSection date={postData.date} title={postData.title} subtitle={postData.id} text={{ __html: postData.contentHtml }}></ArticleSection>
            <Footer></Footer>
        </>
    )
}