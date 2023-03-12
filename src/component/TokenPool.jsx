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
        tokenList.map((item, idx) => <Col sm={2} xs={4} className="my-4"> <Token src={item} init={init} setInit={setInit} key={idx} /></Col>)
        , [tokenList, init])

    useEffect(() => {
        shuffleToken(tokenStringList);
    }, [tokenStringList, init])

    return (
        <Container style={{ minHeight: window.innerHeight }} className="d-flex">
            <div style={{ flexWrap: 'wrap' }} className="d-flex align-content-center justify-content-center">
                <Row className="mb-5">
                    <TokenList />
                </Row>
                <Row className="m-2 mt-5 w-75">
                    <Button className="mt-2" onClick={() => { setInit(true) }}>토큰 섞기</Button>
                </Row>
            </div>
        </Container >
    );
}

export default TokenPool;