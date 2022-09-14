// pages/_document.js

import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <link
        defer
          href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300&display=swap"
          rel="stylesheet"          
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
