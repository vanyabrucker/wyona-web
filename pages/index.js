import Head from 'next/head'

/* Component imports */
import GlobalHead from "../components/head/globalhead";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import Main from "../components/main/main";

export default function Home() {
  return (
      <>
        <Head>
          <GlobalHead/>
          <title>Wyona</title>
          <meta name="description" content="Wyona – Research & Development" />
        </Head>
        <Header color={"black"}/>
        <Main/>
        <Footer/>
      </>
  )
}
