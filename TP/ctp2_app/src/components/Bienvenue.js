import {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

function Bienvenue(props){
    const [clic, clicNumber] = useState(0);
    useEffect(() => {
        alert(`vous avez cliqué ${clic} fois`);
    })
    return (
    <div>
        <nav>
            <Link to="/First">A propos !</Link>
        </nav>
        <h1>Bonjour, {props.name}</h1>
        <div>
            <p>Vous êtes : {props.text}
            Connexion à : {props.date}
            </p>
        </div>
        <div>
            <button onClick={()=> clicNumber(clic + 1)}>clic !</button>
        </div>
    </div>
)}

export default Bienvenue;