import Head from 'next/head'

/* Component imports */
import GlobalHead from "../components/head/globalhead";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import Main from "../components/main/main";
import { getSortedPostsData } from '../lib/posts'

export async function getStaticProps() {
    const allPostsData = getSortedPostsData()
    return {
        props: {
            allPostsData
        }
    }
}

export default function Home({ allPostsData }) {
  return (
      <>
        <Head>
          <GlobalHead/>
          <title>Wyona</title>
          <meta name="description" content="Wyona software development" />
        </Head>
        <Header color={"black"}/>
        <Main/>
        <Footer/>
      </>
  )
}
