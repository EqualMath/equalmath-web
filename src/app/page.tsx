import Script from "next/script"
import Layout from "./layout"
import Content from "./content"

import "./css/bootstrap.min.css"
import "./css/bootstrap-icons.css"
import "./css/templatemo-topic-listing.css"

export default function Home() {
  return (
    <Layout>
      <Content />
      <Script src="js/jquery.min.js" />
      <Script src="js/bootstrap.bundle.min.js" />
      <Script src="js/jquery.sticky.js" />
      <Script src="js/click-scroll.js" />
      <Script src="js/custom.js" />
    </Layout>
  )
}
