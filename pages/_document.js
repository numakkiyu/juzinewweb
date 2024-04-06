import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang='en'>
        <Head>
          {/* 在这里添加外部库 */}
          <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Cedarville+Cursive&family=Inter:wght@300;400;500;600&display=swap" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
