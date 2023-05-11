import Reimu from '../characters/reimu';
import Madeline from '../characters/madeline';
import '../scss/characterselect.scss';
import React from 'react';
import vs from '../assets/img/vs.png';

class Characterselect extends React.Component {

    selectChar = (element) => {
        console.log(element.currentTarget.getAttribute('data'));
    }

    render(){
        const characterList = [
            Reimu,
            Madeline
        ];

        return(
        <div>
            <section className="cs-display">

                <div className="splashContainer">
                    <img alt="1st player"></img>
                </div>

                <div className="vsContainer">
                    <img src={vs} alt="vs"></img>
                </div>

                <div className="splashContainer">
                    <img alt="2bd player"></img>
                </div>

            </section>
            <ul className="cs-l">
                {characterList.map( i => (
                    <li data={i.devName} onClick={this.selectChar} className="cs-btn" key={i.name}>

                    <img src={i.selectImage} alt={i.name}/>
                    <div className="cs-name">{i.name}</div>

                    </li>
                    ))}
            </ul>
        </div>
    )}
}

export default Characterselect;