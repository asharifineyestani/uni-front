import React from 'react'
import { Row, Col } from 'react-grid-system'
import Heading from '../../components/Heading'
import Content from '../../components/Content'

const SignUp = () => {
    return (
        <section className="section section-auth">
            <Content>
                <Heading title="ثبت نام در سایت" subtitle="با بیش از 7 سال سابقه درخشان در عرصه اپلیکیش نویسی" />
                <div className="form">
                    <Row>
                        <Col>
                            <div className="form-div">
                                <input type="text" placeholder="پست الکترونیک" />
                            </div>
                        </Col>
                        <Col>
                            <div className="form-div">
                                <input type="text" placeholder="رمز کاربری" />
                            </div>
                        </Col>
                    </Row>
                    <div className="form-div">
                        <button className="button button-md button-block button-primary">ثبت نام</button>
                    </div>
                </div>
            </Content>
        </section>
    )
}

export default SignUp