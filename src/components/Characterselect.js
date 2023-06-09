import reimu from '../characters/reimu';
import madeline from '../characters/madeline';
import laharl from '../characters/laharl';
import '../scss/characterselect.scss';
import React from 'react';
import vs from '../assets/img/vs.png';
import Splashart from './Splashart';

class Characterselect extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          player1: null,
          player2: null,
          leftDisplay: null,
          rightDisplay: null,
          currentSelect: 'player1'
        };
        this.characterList = [
            reimu,
            madeline,
            laharl
        ];
    }

    hoverChar = (element) => {
        if(this.state.player1 == null)
        {
            this.setState({
                leftDisplay: element.currentTarget.getAttribute('data')
            });
        }
        else if(this.state.player2 == null)
        {
            this.setState({
                rightDisplay: element.currentTarget.getAttribute('data')
            })
        }
    }

    selectChar = (element) => {
        if(this.state.player1 == null)
        {
            this.setState({
                player1: element.currentTarget.getAttribute('data')
            });
        }
        else if(this.props.opponent === "ai")
        {
            console.log("no opponent needed yet");
        }
        else if(this.props.opponent === 'player' && this.state.player2 == null)
        {
            this.setState({
                player2: element.currentTarget.getAttribute('data')
            });
        }

    }

    leftSplash = (element) => {
        let output;

        if(this.state.leftDisplay == null)
        {
            output = <></>
        }
        else
        {
            let result = this.characterList.filter(obj => {
                return obj.devName === this.state.leftDisplay;
              })

            result = result[0];
            output = <Splashart character={result} text={1} side={'left'}/>
        }

        return(output);
    }

    rightSplash = (element) => {
        let output;

        if(this.state.rightDisplay == null)
        {
            output = <div></div>
        }
        else
        {
            let result = this.characterList.filter(obj => {
                return obj.devName === this.state.rightDisplay;
              })

            result = result[0];
            output = <Splashart character={result} text={1} side={'right'}/>
        }

        return(output);
    }

    render(){
        return(
        <div>
            <section className="cs-display">

                <div className="splashContainer">
                    {this.leftSplash()}
                </div>

                <div className="vsContainer">
                    <img src={vs} alt="vs"></img>
                </div>

                <div className="splashContainer">
                    {this.rightSplash()}
                </div>

            </section>
            <ul className="cs-l">
                {this.characterList.map( i => (
                    <li data={i.devName} onClick={this.selectChar} onMouseEnter={this.hoverChar} className="cs-btn" key={i.name}>

                    <img src={i.selectImage} alt={i.name}/>
                    <div className="cs-name">{i.name}</div>

                    </li>
                    ))}
            </ul>
        </div>
    )}
}

export default Characterselect;