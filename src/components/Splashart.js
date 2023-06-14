import '../scss/splashart.scss';
import React from 'react';

class Splashart extends React.Component {
    render(){
        let textOutput;

        console.log('props', this.props.side);
        if(this.props.text === 1)
        {
            textOutput = <ul>
                            <li className="charName">{this.props.character.name}</li>
                            <li className="charDesc">{this.props.character.description}</li>
                            <li className="charAbilities">
                                <p>Abilities :</p>
                                <p>-{this.props.character.abilityList[0]}</p>
                                <p>-{this.props.character.abilityList[1]}</p>
                                <p>-{this.props.character.abilityList[2]}</p>
                                <p>-{this.props.character.abilityList[3]}</p>
                            </li>
                        </ul>
        }
        else {textOutput = null}
        return(
                <div className={"playerSplash " + this.props.side}>
                    {textOutput}
                <img alt="1st player" src={this.props.character.splashImage}></img>
                </div>
        )
    }
}

export default Splashart;