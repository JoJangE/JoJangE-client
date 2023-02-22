import Document, { Html, Head, Main, NextScript } from 'next/document'
import { ServerStyleSheets } from '@mui/styles'

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <body>
          <Head></Head>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
MyDocument.getInitialProps = async (ctx: any) => {
  const materialSheets = new ServerStyleSheets()
  const originalRenderPage = ctx.renderPage

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App: any) => (props: any) => materialSheets.collect(<App {...props} />),
    })

  const initialProps: any = await Document.getInitialProps(ctx)
  return {
    ...initialProps,
    styles: <>{initialProps.styles}</>,
  }
}
