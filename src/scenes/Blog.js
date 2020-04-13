import React from 'react'
import { Container, Row, Col } from 'react-grid-system'
import Card from '../components/Card'

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
                        <div className="timeline">
                            <Card title="برای مساعدت با دانشجویان در دوران شیوع بیماری کرونا فراهم شد؛" subtitle="معاون اداری،مالی و عمرانی دانشگاه پیام نور ضمن ابراز همدردی با خانواده هایی که به هر نحو به دلیل شیوع بیماری کرونا و تعطیلی مشاغل در شرایط اقتصادی مطلوبی قرار ندارند..." link="" />
                            <Card title="برای مساعدت با دانشجویان در دوران شیوع بیماری کرونا فراهم شد؛" subtitle="معاون اداری،مالی و عمرانی دانشگاه پیام نور ضمن ابراز همدردی با خانواده هایی که به هر نحو به دلیل شیوع بیماری کرونا و تعطیلی مشاغل در شرایط اقتصادی مطلوبی قرار ندارند..." link="" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
