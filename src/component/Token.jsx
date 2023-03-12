import React, { useEffect, useState } from 'react';
import imgPath from '../assets/img/imgPath'
import { Image } from 'react-bootstrap';
import './Token.css'

function Token({ src, init, setInit }) {
    const [isFront, setIsFront] = useState(false)

    useEffect(() => {
        if (init) {
            setIsFront(false);
            setInit(false);
        }
    }, [init, setInit])

    return (
        <div className="flip">
            <div className={`token ${isFront ? 'token-flag' : ''}`} >
                <Image className="back" src={imgPath[src]} style={{
                    backgroundSize: 'cover',
                }}
                    onClick={() => { setIsFront(false) }}>
                </Image >
                <Image className="front" src={imgPath.BACK} style={{
                    backgroundSize: 'cover',
                }}
                    onClick={() => { setIsFront(true) }}>
                </Image >
            </div>
        </div >
    );
}

export default Token;