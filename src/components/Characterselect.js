import Reimu from '../characters/reimu';
import Madeline from '../characters/madeline';
import '../scss/characterselect.scss';
import React from 'react';

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

                <div></div>

                <div></div>

                <div></div>

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