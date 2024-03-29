import {useEffect} from 'react';
import hills from '../RR-React-A-Mole-Images-main/molehill.png';

const EmptySlot = (props) => {
    useEffect(() => {
        let randTime = Math.ceil(Math.random() * 5000)
        let timer = setTimeout(() => {
            props.toggle(true)
        }, randTime)
        return() => clearTimeout(timer)
    })

    return (
        <div>
            <img style={{'width': '30vw'}} src={hills} alt={"mole hill"}/>
        </div>
    )
    }

export default EmptySlot;