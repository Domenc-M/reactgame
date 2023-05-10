import Reimu from '../characters/reimu';
import Madeline from '../characters/madeline';
import '../scss/characterselect.scss';

const Characterselect = (props) => {

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
                    <li className="cs-btn" key={i.name}>

                    <img src={i.selectImage} alt={i.name}/>
                    <div className="cs-name">{i.name}</div>

                    </li>
                    ))}
            </ul>
        </div>
    )
}

export default Characterselect;