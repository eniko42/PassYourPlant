import React from "react"
import Navbar from "./Navbar";
import { Footer } from "./Footer";
class Layout extends React.Component {
  render(){
    return (
      <>
        <Navbar />
        <main>{this.props.children}</main>
        <Footer />
      </>
    )
  }
}
export default Layout;