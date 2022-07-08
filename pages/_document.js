import Document, { Html, Head, Main, NextScript } from 'next/document'


export default class MyDocument extends Document {

  render() {
    return (
      <Html>
        <Head>
            <link rel="icon" type="image/x-icon" href="/favicon.ico"/>
            <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon"/>
            <link rel="preconnect" href="https://fonts.gstatic.com"/>
            <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet"/>
            <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap" rel="stylesheet"></link>
            <link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,500;0,700;1,400;1,500&display=swap" rel="stylesheet"/>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}