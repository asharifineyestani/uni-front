import React from 'react'
import { Container, Row, Col } from 'react-grid-system'

const Content = (props) => {
    const { children } = props
    return (
        <Container>
            <Row>
                <Col xs={12} lg={7} className="div-center">{children}</Col>
            </Row>
        </Container>
    )
}

export default Content
