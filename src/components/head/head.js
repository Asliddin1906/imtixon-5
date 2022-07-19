import logo  from "../../assets/img/logo.png"
import zoom from "../../assets/img/Icon color.png"
import bars from "../../assets/img/bars.jpg"
import close from "../../assets/img/close.jpg"

import "./head.scss";

const Head = () => {
  return (
    <div className="head-box">
    <img src={logo} alt="" className="logo"/>
    
    <div class="dropdown">
    <button class="dropbtn"><img src={bars} alt="" className="menu-btn" /><img src={close} alt="" className="close-btn"/> </button>
      <div className="dropdown-content nav" >
        <a href="#" className="nav__item">ALL</a>
        <a href="#" className="nav__item">Design</a>
        <a href="#" className="nav__item">Theory</a>
        <a href="#" className="nav__item">UX</a>
        <a href="#" className="nav__item">UI</a>
        <a href="#" className="nav__item"> Typography</a>
    <form className="filter" >
      <input type="text" placeholder="Search" className="filter-inp"/>
      <img src={zoom} alt="" className="inp-icon" />
    </form> 
    </div>
    </div>
    </div>
  )
}

export default Head;