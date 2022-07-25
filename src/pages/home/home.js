import Cards from "../../components/cards/cards"
import Filter from "../../components/filter/filter"
import Head from "../../components/head/head"
import Pagination from "../../components/pagination/pagination"
import Suggestion from "../../components/suggestion/suggestion"

import "./home.scss"
const Home = () => {
  return(
    <div className="home">
      <div className="head">
    <Head/>
    <Filter className="filter"/>
      </div>
    <div className="body">
    <Suggestion className="suggestion"/>
    <div>
    <Cards className="cards"/>
    <Pagination className="pagination"/>

    </div>

    </div>
    </div>
  )
}

export default Home
