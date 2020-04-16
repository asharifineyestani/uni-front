import React, { useState } from 'react'
import axios from 'axios'
import { Row, Col } from 'react-grid-system'
import Heading from '../../components/Heading'
import Content from '../../components/Content'
import api from '../../api'

const SignIn = () => {

    const [data, setData] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault()
        let form = {}
        let name = e.target.name.value;
        let mobile = e.target.mobile.value;
        let password = e.target.password.value;

        form.name = name
        form.mobile = mobile
        form.password = password

        let formData = JSON.stringify(form)

        setData(formData)

        axios.post(`${api}/auth/register`, formData)
            .then(result => {
                console.log(result);
                console.log(result.data);
            });
    }

    return (
        <section className="section section-auth">
            <Content>
                <Heading title="ورود به سایت" subtitle="با بیش از 7 سال سابقه درخشان در عرصه اپلیکیش نویسی" />
                <form className="form" onSubmit={handleSubmit}>
                    <Row className="row-sm">
                        <Col lg={6}>
                            <div className="form-div">
                                <input type="text" name="mobile" placeholder="شماره تلفن همراه" />
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className="form-div">
                                <input type="password" name="password" placeholder="رمز کاربری" />
                            </div>
                        </Col>
                    </Row>
                    <button className="button button-md button-block button-primary" type="submit">ورود به سایت</button>
                </form>
            </Content>
        </section>
    )
}

export default SignIn