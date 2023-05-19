import reimu from '../characters/reimu';
import madeline from '../characters/madeline';
import laharl from '../characters/laharl';
import '../scss/characterselect.scss';
import React from 'react';
import vs from '../assets/img/vs.png';

class Characterselect extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          player1: null,
          player2: null,    
        };
        this.characterList = [
            reimu,
            madeline
        ];
    }

    selectChar = (element) => {
        this.setState({
            player1: element.currentTarget.getAttribute('data')
        });
    }

    leftSplash = (element) => {

        let output;

        if(this.state.player1 === null)
        {
            output = <div>coucou</div>
        }
        else
        {
            let result = this.characterList.filter(obj => {
                return obj.devName === this.state.player1;
              })

            result = result[0];
            console.log(result);
            output = <div className="playerSplash">
                <ul>
                    <li>{result.name}</li>
                    <li>{result.description}</li>
                    <li>{result.abilityList[0]}</li>
                    <li>{result.abilityList[1]}</li>
                    <li>{result.abilityList[2]}</li>
                    <li>{result.abilityList[3]}</li>
                </ul>
                <img alt="1st player" src={result.selectImage}></img>
                </div>;
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
                    <img alt="2nd player"></img>
                </div>

            </section>
            <ul className="cs-l">
                {this.characterList.map( i => (
                    <li data={i.devName} onMouseEnter={this.selectChar} className="cs-btn" key={i.name}>

                    <img src={i.selectImage} alt={i.name}/>
                    <div className="cs-name">{i.name}</div>

                    </li>
                    ))}
            </ul>
        </div>
    )}
}

export default Characterselect;