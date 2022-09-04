import React from "react"
import Navbar from "./Navbar";
import { Footer } from "./Footer";
import "../style/App.css"

class Layout extends React.Component {
  render() {
    return (
      <>

        <main>

          <div className="pageContainer">
            <Navbar />
            {this.props.children}
            <Footer />
          </div>

        </main>

      </>
    )
  }
}
export default Layout;