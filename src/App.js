import Mainmenu from './components/mainmenu.js';
import './scss/app.scss';

function singleplayer() {
  console.log("singleplayer");
}

function versusmode() {
  console.log("versus");
}

function App() {
  return (
    <div className="App">

      <Mainmenu singleplayer={singleplayer} versusmode={versusmode} />

    </div>
  );
}

export default App;
