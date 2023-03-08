import FabricForm from './components/FabricForm';
import FabricGrid from './components/FabricGrid';
import ThreadForm from './components/ThreadForm';
import ThreadGrid from './components/ThreadGrid';
import heart from './images/heart.svg';
import './styles/app.scss';

function App() {
  return (
      <div className="main">
        <div className="header">
          <h1>hahnmade</h1>
        </div>

        <div className="content">
          <h2>Fabric</h2>
          <FabricForm />
          <FabricGrid />

          <h2>Thread</h2>
          <ThreadForm />
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
