import { animated, useSpring } from '@react-spring/web';
import React, { useCallback, useEffect, useState } from 'react';
import { Col, Row, Container, Button } from 'react-bootstrap';
import Token from './Token';
import './Token.css'

function TokenPool({ tokenStringList, setTokenList }) {
    const animationSetup = {
        from: { opacity: 0 },
        to: { opacity: 1 },
    }
    const [init, setInit] = useState(false);
    const [tokenPool, setTokenPool] = useState([]);
    const [springs, api] = useSpring(() => animationSetup)

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
        tokenPool.map((item, idx) => <Col md={2} sm={3} xs={4} className="my-4 d-flex justify-content-center">
            <Token src={item} init={init} setInit={setInit} key={idx} />
        </Col>)
        , [tokenPool, init])

    useEffect(() => {
        shuffleToken(tokenStringList);
    }, [tokenStringList, init])

    return (
        <Container style={{ minHeight: window.innerHeight }} className="d-flex webfont-text">
            <div style={{ flexWrap: 'wrap' }} className="d-flex align-content-center justify-content-center">
                <animated.div className="row" style={{ ...springs }}>
                    <TokenList />
                </animated.div>
                <Row className="m-2 mt-5 w-75">
                    <Button size="lg" className="my-2 mixtoken" onClick={() => { setInit(true); api.start(animationSetup) }} >토 큰 섞 기</Button>
                    <Button size="lg" variant="warning" className="mt-2 moditoken" onClick={() => { setTokenInit() }}>뒤 로 가 기</Button>
                </Row>
            </div>
        </Container >
    );
}

export default TokenPool;