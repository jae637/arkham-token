import React, { useState, useEffect } from 'react';
import { Container, InputGroup, Form, Button, Row, Col, Image } from 'react-bootstrap';
import imgPath from '../assets/img/imgPath'


function Main(props) {
    const [tokenPool, setTokenPool] = useState({
        'P2': 0, 'P1': 0, 'ZERO': 0, 'M1': 0, 'M2': 0, 'M3': 0, 'M4': 0, 'M5': 0, 'M6': 0, 'M7': 0, 'M8': 0, 'M9': 0,
        'S1': 0, 'S2': 0, 'S3': 0, 'S4': 0, 'S5': 0, 'S6': 0, 'BLESS': 0, 'CURSE': 0
    })

    useEffect(() => {
        let tempData = sessionStorage.getItem('tokens')
        if (tempData) {
            setTokenPool(JSON.parse(tempData));
        }
    }, [])
    // 변수를 가지고 토큰 리스트를 만들 때 사용
    function makeTokenList() {
        let result = []
        let count = 0
        Object.keys(tokenPool).forEach(key => {
            for (let i = 0; i < tokenPool[key]; i++) result.push({ id: count++, tag: key })
        })
        sessionStorage.setItem('tokens', JSON.stringify(tokenPool))

        props.setTokenList(result)

    }

    // Input Box Handler
    function onChangeByKey(value, key) {
        let tmp = { ...tokenPool }
        if (isNaN(value))
            return
        tmp[key] = value;
        setTokenPool(tmp);
    }

    // Input Box Renderer
    function columns() {
        console.log(tokenPool)
        return Object.keys(tokenPool).map(key =>
            <Col sm={3} xs={6} key={key} className="my-2">
                <InputGroup className="p-2">
                    <Image src={imgPath[key]} height="60" className="me-2">
                    </Image>
                    <Form.Control
                        value={tokenPool[key] * 1}
                        key={key}
                        onChange={(e) => onChangeByKey(e.target.value * 1, key)}

                    />
                </InputGroup>
            </Col>
        )
    }
    return (
        <Container style={{ minHeight: window.innerHeight }} className="d-flex webfont-text">
            <Form style={{ flexWrap: 'wrap' }} className="d-flex align-content-center justify-content-center">
                <Row>
                    {columns()}
                </Row>
                <div className="d-flex my-4 justify-content-center" style={{ flexFlow: 'column' }}>
                    <div className="align-self-center">
                        <Button size="lg" type="submit" onClick={makeTokenList} style={{ backgroundColor: 'black', border: '0px' }}> 확 인</Button>
                    </div>
                    <div className="mt-5">
                        Contect : <a style={{ textDecoration: 'none', color: 'black' }} href="mailto:jae637@naver.com">jae637@naver.com</a>
                    </div>
                </div>
            </Form>
        </Container >
    );
}

export default Main;