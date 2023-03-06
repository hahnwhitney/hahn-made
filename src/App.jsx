import FabricGrid from './FabricGrid';
import ThreadGrid from './ThreadGrid';
import heart from './heart.svg';
import './App.css';

function App() {
  return (
      <div className="main">
        <div className="header">
          <h1>hahnmade</h1>
          {/*<TopNav />*/}
        </div>

        <div className="content">
          <h2>Fabric</h2>
          <FabricGrid />

          <h2>Thread</h2>
          <ThreadGrid />
        </div>

        <footer>
          <span>Coded with</span>
          <img id="heart" src={heart} alt="heart" />
          <span>in Greenville</span>
          <img id="owlbert" src="https://owlbertsio-resized.s3.amazonaws.com/Hanging.psd.full.png" alt="Owlbert" height="60" />
        </footer>
    </div>
  );
}

export default App;
