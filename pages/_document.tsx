import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="ru">
      <Head />
      <script src="https://telegram.org/js/telegram-web-app.js"></script>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
