import Mole from './Mole';
import EmptySlot from './EmptySlot';
import {useState} from 'react';

const MoleContainer = (props) => {
    let [displayMole, setDisplayMole] = useState(false)

    const bopMole = (e) => {
        props.setScore(props.score + 1)
        setDisplayMole(false)
    }

    let displayAMole = (
        <div>
            {displayMole
                ? <Mole setScore = {props.setScore} toggle={setDisplayMole} handleClick={bopMole}/>
                : <EmptySlot toggle={setDisplayMole}/>}
        </div>
    )

    return (
        <div style={{'display': 'inline-block', 'width': '30vw'}}>
            {displayAMole}
        </div>
    )
}

export default MoleContainer;