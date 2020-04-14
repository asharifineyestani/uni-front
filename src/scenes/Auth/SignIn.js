import React from 'react'
import Heading from '../../components/Heading'
import Content from '../../components/Content'

const SignIn = () => {
    return (
        <section className="section section-auth">
            <Content>
                <Heading title="ورود به سایت" subtitle="با بیش از 7 سال سابقه درخشان در عرصه اپلیکیش نویسی" />
                <div className="form">
                    <div className="form-div">
                        <input type="text" placeholder="پست الکترونیک"/>
                    </div>
                    <div className="form-div">
                        <input type="text" placeholder="رمز کاربری"/>
                    </div>
                    <div className="form-div">
                        <button className="button button-md button-block button-primary">ثبت نام</button>
                    </div>
                </div>
            </Content>
        </section>
    )
}

export default SignIn