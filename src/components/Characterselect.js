const Characterselect = (props) => {

    const characterList = [
        'reimu',
        'madeline'
    ];
    return(
        <ul>
            {characterList.map( i => (
                <li key={i}>{i}</li>
                ))}
        </ul>
    )
}

export default Characterselect;