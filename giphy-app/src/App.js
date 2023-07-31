import './App.css';
import Random from './Random';
import Search from './Search';
import Trending from './Trending';

function App() {
  return (
    <div className="App">
      <h1>One Stop Gif Shop</h1>
      <div className='grid-wrapper'>
        <Random />
        <Search />
        <Trending />
      </div>
    </div>
  );
}

export default App;
