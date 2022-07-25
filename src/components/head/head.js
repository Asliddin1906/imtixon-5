import logo  from "../../assets/img/logo.png"
import bars from "../../assets/img/bars.png"
import close from "../../assets/img/close.png"

import "./head.scss";

const Head = () => {
  return (
    <div className="head">

    <img src={logo} alt="" className="logo"/>
    
    <div className="dropdown">
    <button className="dropbtn"><img src={bars} alt="" className="menu-btn" /><img src={close} alt="" className="close-btn"/> </button>
      <div className="dropdown-content nav" >
        <a href="*" className="nav__item">ALL</a>
        <a href="*" className="nav__item">Design</a>
        <a href="*" className="nav__item">Theory</a>
        <a href="*" className="nav__item">UX</a>
        <a href="*" className="nav__item">UI</a>
        <a href="*" className="nav__item"> Typography</a>
      </div>
    </div>
    </div>
  )
}

export default Head;