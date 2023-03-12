import React, { useCallback, useEffect, useState } from 'react';
import Token from './Token'

function TokenPool({ tokenStringList }) {
    const [init, setInit] = useState(false);
    const [tokenList, setTokenList] = useState([]);

    // 랜덤하게 토큰을 배치하는데 사용
    function shuffleToken(arr) {
        setTokenList(arr.sort(() => Math.random() - 0.5));
    }

    // 토큰 리스트를 랜더링 할때 사용
    const TokenList = useCallback(() =>
        tokenList.map((item, idx) => <Token src={item} init={init} setInit={setInit} key={idx} />)
        , [tokenList, init])

    useEffect(() => {
        shuffleToken(tokenStringList);
    }, [tokenStringList, init])

    console.log(tokenList)

    return (
        <>
            <button onClick={() => { setInit(true) }}>초기화</button>

            <TokenList />
        </>
    );
}

export default TokenPool;