import { motion, useAnimationControls } from "framer-motion";
import React, { useEffect, useState } from 'react';
import { Col, Row, Container, Button } from 'react-bootstrap';
import Token from './Token';
import './Token.css'

function TokenPool({ tokenStringList, setTokenList }) {
    const animationControl = useAnimationControls();
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

    useEffect(() => {
        shuffleToken(tokenStringList);
    }, [tokenStringList, init])


    return (
        <Container style={{ minHeight: window.innerHeight }} className="d-flex webfont-text">
            <div style={{ flexWrap: 'wrap' }} className="d-flex align-content-center justify-content-center">
                {/* <TokenList /> */}
                {
                    tokenPool.map((item, idx) => <Col md={2} sm={3} xs={4} className="my-4 d-flex justify-content-center"
                        key={item.id}>
                        <motion.div
                            layout
                            animate={animationControl}
                            transition={{
                                duration: 0.8,
                            }}
                        >
                            <Token src={item.tag} init={init} setInit={setInit} />
                        </motion.div>
                    </Col>)
                }
                <Row className="m-2 mt-5 w-75">
                    <Button size="lg" className="my-2 mixtoken" onClick={() => { setInit(true); animationControl.start({ opacity: [1, 0, 0, 0, 1] }) }} >토 큰 섞 기</Button>
                    <Button size="lg" variant="warning" className="mt-2 moditoken" onClick={() => { setTokenInit() }}>뒤 로 가 기</Button>
                </Row>
            </div>
        </Container >
    );
}

export default TokenPool;