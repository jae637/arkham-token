import React, { useState, useEffect } from 'react';
import { Container, InputGroup, Form, Button, Row, Col, Image } from 'react-bootstrap';
import imgPath from '../assets/img/imgPath'


function Main(props) {
    const [tokenPool, setTokenPool] = useState({
        '0': 0, 'M1': 0, 'M2': 0, 'M3': 0, 'M4': 0, 'M5': 0, 'M6': 0, 'M7': 0, 'M8': 0, 'M9': 0,
        'P1': 0, 'P2': 0, 'S1': 0, 'S2': 0, 'S3': 0, 'S4': 0, 'S5': 0, 'S6': 0, 'BLESS': 0, 'CURSE': 0
    })

    useEffect(() => {
        let tempData = sessionStorage.getItem('tokens')
        console.log(tempData)
        if (tempData) {
            setTokenPool(JSON.parse(tempData));
        }
    }, [])
    // 변수를 가지고 토큰 리스트를 만들 때 사용
    function makeTokenList() {
        let result = []
        Object.keys(tokenPool).forEach(key => {
            for (let i = 0; i < tokenPool[key]; i++) result.push(key)
        })
        sessionStorage.setItem('tokens', JSON.stringify(tokenPool))

        props.setTokenList(result)

    }

    // Input Box Handler
    function onChangeByKey(value, key) {
        let tmp = { ...tokenPool }
        tmp[key] = value;
        setTokenPool(tmp);
    }

    // Input Box Renderer
    function columns() {
        return Object.keys(tokenPool).map(key =>
            <Col sm={3} xs={6} key={key}>
                <InputGroup className="p-2">
                    <Image src={imgPath[key]} height="50" className="me-2">
                    </Image>
                    <Form.Control
                        type="number"
                        value={tokenPool[key] * 1}
                        key={key}
                        onChange={(e) => onChangeByKey(e.target.value * 1, key)}
                    />
                </InputGroup>
            </Col>
        )
    }
    return (
        <Container style={{ minHeight: window.innerHeight }} className="align-content-center">
            <Row>
                {columns()}
            </Row>
            <div className="d-flex justify-content-center mt-2">
                <Button onClick={makeTokenList}> 확인</Button>
            </div>
        </Container >
    );
}

export default Main;