import React, { useState } from 'react';
import { Container, InputGroup, Form, Button, Row, Col, Image } from 'react-bootstrap';
import imgPath from '../assets/img/imgPath'


function Main(props) {
    const [tokenList, setTokenList] = useState([])
    const [tokenPool, setTokenPool] = useState({
        '0': 0, 'M1': 0, 'M2': 0, 'M3': 0, 'M4': 0, 'M5': 0, 'M6': 0, 'M7': 0, 'M8': 0, 'M9': 0,
        'P1': 0, 'P2': 0, 'S1': 0, 'S2': 0, 'S3': 0, 'S4': 0, 'S5': 0, 'S6': 0, 'S7': 0, 'S8': 0,
    })

    // 변수를 가지고 토큰 리스트를 만들 때 사용
    function makeTokenList() {

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
            <Col sm={3} xs={6}>
                <InputGroup className="m-2">
                    <Image src={imgPath[key]} height="50" className="me-2">
                    </Image>
                    <Form.Control
                        type="number"
                        value={tokenPool[key]}
                        onChange={(e) => onChangeByKey(e.target.value * 1, key)}
                    />
                </InputGroup>
            </Col>
        )
    }
    return (
        <Container>
            <Row>
                {columns()}
            </Row>
            <Button> 확인</Button>
        </Container >
    );
}

export default Main;