import Reimu from '../characters/reimu';
import Madeline from '../characters/madeline';

const Characterselect = (props) => {

    const characterList = [
        Reimu,
        Madeline
    ];

    console.log(characterList);

    return(
        <ul>
            {characterList.map( i => (
                <li key={i}>{i.name}</li>
                ))}
        </ul>
    )
}

export default Characterselect;