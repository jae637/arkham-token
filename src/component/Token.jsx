import React, { useEffect, useState } from 'react';
import imgPath from '../assets/img/imgPath'
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
                <div className="back" style={{
                    backgroundImage: `url(${imgPath[src]})`,
                    backgroundSize: 'cover',
                }}
                    onClick={() => { setIsFront(false) }}>
                </div >
                <div className="front" style={{
                    backgroundImage: `url(${imgPath.BACK})`,
                    backgroundSize: 'cover',
                }}
                    onClick={() => { setIsFront(true) }}>
                </div >
            </div>
        </div >
    );
}

export default Token;