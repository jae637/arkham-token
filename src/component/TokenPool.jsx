import React, { useCallback, useEffect, useState } from 'react';
import { Col, Row, Container, Button } from 'react-bootstrap';
import Token from './Token';

function TokenPool({ tokenStringList }) {
    const [init, setInit] = useState(false);
    const [tokenList, setTokenList] = useState([]);

    // 랜덤하게 토큰을 배치하는데 사용
    function shuffleToken(arr) {
        setTokenList(arr.sort(() => Math.random() - 0.5));
    }

    // 토큰 리스트를 랜더링 할때 사용
    const TokenList = useCallback(() =>
        tokenList.map((item, idx) => <Col sm={2} xs={4}> <Token src={item} init={init} setInit={setInit} key={idx} /></Col>)
        , [tokenList, init])

    useEffect(() => {
        shuffleToken(tokenStringList);
    }, [tokenStringList, init])

    return (
        <Container style={{ minHeight: window.innerHeight }} className="align-content-center">
            <Row>
                <TokenList />
            </Row>
            <Row className="m-2 mt-5">
                <Button onClick={() => { setInit(true) }}>다시 뽑기</Button>
                <Button className="mt-2" onClick={() => { setInit(true) }}>초기화</Button>
            </Row>
        </Container>
    );
}

export default TokenPool;