import reimu from '../characters/reimu';
import madeline from '../characters/madeline';
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
    }

    selectChar = (element) => {
        this.setState({
            player1: element.currentTarget.getAttribute('data')
        });
    }

    leftSplash = (element) => {

        let output;

        console.log('the input :', this.state.player1);
        console.log('my try : ', window[this.state.player1]);
        console.log('What I want :', reimu);

        if(this.state.player1 == null)
        {
            output = <div>coucou</div>
        }
        else
        {
            output = <div>
                {this.state.player1}
                <img alt="1st player" src={[this.state.player1].selectImage}></img>
                </div>;
        }

        return(output);
    }

    render(){
        const characterList = [
            reimu,
            madeline
        ];

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
                {characterList.map( i => (
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