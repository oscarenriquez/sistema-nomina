import {Metadata} from "next";
import { Html, Head, Main, NextScript } from 'next/document'

export const metadata: Metadata = {
  title: 'Sistema de Nomina',
  description: 'Aplicación de sistema de Nomina 2023',
}

export default function Document() {
  return (
    <Html lang="en">
      <Head>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
