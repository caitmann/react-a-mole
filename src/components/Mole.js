import {useEffect} from 'react';
import molePic from '../RR-React-A-Mole-Images-main/mole.png';

const Mole = (props) => {
    useEffect(() => {
        let randTime = Math.ceil(Math.random() * 10000)
        let timer = setTimeout(() => {
            props.toggle(false)
        }, randTime)
        return () => clearTimeout(timer)
    })
    return (
        <div>
            <img style={{'width': '30vw'}} src={molePic} onClick={props.handleClick} alt={"mole in mole hill"}/>
        </div>
    )
}

export default Mole;