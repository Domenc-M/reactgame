import Mainmenu from './components/mainmenu.js';
import Characterselect from './components/Characterselect.js';
import './scss/app.scss';
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      screen: 'mainmenu',
      opponent: 'ai',
      player1: null,
      player2: null
    }
  };

  singleplayer = () => {
    this.setState({
      screen: 'select',
      opponent: 'ai'
    });
  }

  versusmode = () => {
    this.setState({
      screen: 'select',
      opponent: 'player'
    });
  }

  render() {

    let display;


    if (this.state.screen === 'mainmenu')
    {
      display = <Mainmenu singleplayer={this.singleplayer} versusmode={this.versusmode} />
    }
    else if (this.state.screen === 'select')
    {
      display = <Characterselect />
    }
    return (
      <div className="App">
        {display}
      </div>
    );
  }

}

export default App;
