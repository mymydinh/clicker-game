import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Wrapper(props) {
    return (
        <Container className="body-container">
            <Row className="rowContainer">
                <Col><div className="wrapper">{props.children}</div></Col>
            </Row>
        </Container>
    )
}

export default Wrapper;
