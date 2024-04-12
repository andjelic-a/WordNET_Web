import '../../css/HomeComponents.css';
import Header from "./Header/Header";
import Search from "./Search/Search";
import { getWords } from '../../request_handler/ServerRequest';
import Words from './Words/Words';

function Home() {
  // Calling server to get all words from database
  getWords();

  return (
    <div className="home">
      <Header />
      <Search />
      <Words />
    </div>
  )
}

export default Home;