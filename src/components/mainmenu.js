import '../scss/mainmenu.scss'

const Mainmenu = (props) => {

    return(

        <ul className="mm-l">

            <li className="mm-btn" onClick={props.singleplayer}>Arcade mode</li>
            <li className="mm-btn" onClick={props.versusmode}>Versus mode</li>

        </ul>
        
    );
}

export default Mainmenu;