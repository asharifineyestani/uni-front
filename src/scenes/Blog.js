import React from 'react'
import { Container, Row, Col } from 'react-grid-system'


export default () => {
    return (
        <section className="section section-blog">
            <Container>
                <Row>
                    <Col lg={7} className="div-center">
                        <div className="app-heading">
                            <h1>معرفی شرکت برنامه نویسی افـراکـد</h1>
                            <h2>با بیش از 7 سال سابقه درخشان در عرصه اپلیکیش نویسی</h2>
                            <div className="divider divider-dots"></div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
