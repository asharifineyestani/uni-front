import React, { useState } from 'react'
import axios from 'axios'
import { Row, Col } from 'react-grid-system'
import Heading from '../../components/Heading'
import Content from '../../components/Content'
import api from '../../api'

const SignUp = () => {

    const [data, setData] = useState({})
    const [response, setResponse] = useState({})

    function Form1() {
        return (
            <form className="form" onSubmit={handleSubmit}>
                <Row className="row-sm">
                    <Col lg={12}>
                        <div className="form-div">
                            <input type="text" name="name" placeholder="نام و نام خانوادگی" />
                        </div>
                    </Col>
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
                <button className="button button-md button-block button-primary" type="submit">ثبت نام</button>
            </form>
        )
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        let form = {}
        form.name = e.target.name.value;
        form.mobile = e.target.mobile.value;
        form.password = e.target.password.value;

        axios.post(`${api}/auth/register`, form)
            .then(result => {
                setData(result.data)
            }).catch(error => {
                console.log(error)
            });
    }

    function Form2() {

        let message = data.message

        return (
            <>
                <h3>{message}</h3>
                <form className="form" onSubmit={handleSubmit2}>
                    <Row className="row-sm">
                        <Col lg={12}>
                            <div className="form-div">
                                <input type="text" name="code" placeholder="کد ارسال شده را وارد نمایید" />
                            </div>
                        </Col>
                    </Row>
                    <button className="button button-md button-block button-primary" type="submit">تکمیل ثبت نام</button>
                </form>
            </>
        )
    }

    const handleSubmit2 = (e) => {
        e.preventDefault()
        let code = e.target.code.value
        let form = {}
        form.code = code
        form.mobile = data.data.mobile

        if (code == data.data.code) {
            alert("ثبت نام شما با موفقیت تکمیل شد")

            axios.post(`${api}/auth/active/code`, form)
                .then(result => {
                    setResponse(result.data.data)
                }).catch(error => {
                    console.log(error)
                });
        }
    }

    return (
        <section className="section section-auth">
            {console.log(response)}
            <Content>
                <Heading title="ثبت نام در سایت" subtitle="با بیش از 7 سال سابقه درخشان در عرصه اپلیکیش نویسی" />
                {(Object.keys(data).length === 0 && data.constructor === Object) ? <Form1 /> : <Form2 />}
            </Content>
        </section>
    )
}

export default SignUp