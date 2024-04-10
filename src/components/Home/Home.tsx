import '../../css/HomeComponents.css';
import Header from "./Header/Header";
import Search from "./Search/Search";

function Home() {
    return (
      <>
        <div className="home">
          <Header />
          <Search />
        </div>
      </>
    )
  }
  
  export default Home;