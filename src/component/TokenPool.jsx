import React, { useCallback, useEffect, useState } from 'react';
import { Col, Row, Container, Button } from 'react-bootstrap';
import Token from './Token';

function TokenPool({ tokenStringList, setTokenList }) {
    const [init, setInit] = useState(false);
    const [tokenPool, setTokenPool] = useState([]);

    // 토큰 설정 페이지로 이동
    function setTokenInit() {
        setTokenList([]);
    }

    // 랜덤하게 토큰을 배치하는데 사용
    function shuffleToken(arr) {
        setTokenPool(arr.sort(() => Math.random() - 0.5));
    }

    // 토큰 리스트를 랜더링 할때 사용
    const TokenList = useCallback(() =>
        tokenPool.map((item, idx) => <Col sm={2} xs={4} className="my-4"> <Token src={item} init={init} setInit={setInit} key={idx} /></Col>)
        , [tokenPool, init])

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
                    <Button size="lg" className="my-2" onClick={() => { setInit(true) }}>토큰 섞기</Button>
                    <Button size="lg" variant="warning" className="mt-2" onClick={() => { setTokenInit() }}>토큰 수정</Button>
                </Row>
            </div>
        </Container >
    );
}

export default TokenPool;