import Reimu from '../characters/reimu';
import Madeline from '../characters/madeline';

const Characterselect = (props) => {

    const characterList = [
        Reimu,
        Madeline
    ];

    return(
        <ul className="cs-l">
            {characterList.map( i => (
                <li className="cs-btn" key={i.name}>{i.name}

                <img src={i.selectImage} alt={i.name}/>
                
                </li>
                ))}
        </ul>
    )
}

export default Characterselect;