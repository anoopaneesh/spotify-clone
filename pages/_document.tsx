


import Document, { DocumentContext ,Html, Head, Main, NextScript} from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)

    return initialProps
  }
  render(){
    return ( <Html>
        <Head>
  
        <meta property="og:url" content="https://spotify-clone-anoop.vercel.app" />
        <meta property="og:type" content="website" />
        <meta property="fb:app_id" content="your fb app id" />
        <meta
          property="og:title"
          content="Spotify Clone | Creative World Inc."
        />
        <meta name="twitter:card" content="summary" />
        <meta
          property="og:description"
          content="This is a clone of spotify web made by Anoop"
        />
        <meta property="og:image" content="https://res.cloudinary.com/anoopaneesh/image/upload/v1635267287/samples/Screenshot_from_2021-10-26_22-19-48_wlxuwj.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
    <       link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap" rel="stylesheet" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>)
  }
}

export default MyDocument

