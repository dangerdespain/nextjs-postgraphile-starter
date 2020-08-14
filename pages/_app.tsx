import { LayoutTree } from '@moxy/next-layout'

const App = ({ Component, pageProps }) => (
  <LayoutTree 
    Component={Component}
    pageProps={pageProps}
  />
)

export default App