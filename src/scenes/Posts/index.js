import React from 'react'
import Card from '../../components/Card'
import Content from '../../components/Content'
import Heading from '../../components/Heading'

function Posts(props) {
    return (
        <section className="section section-blog">
            <Content>
                <Heading title="معرفی شرکت برنامه نویسی افـراکـد" subtitle="با بیش از 7 سال سابقه درخشان در عرصه اپلیکیش نویسی" />
                <div className="timeline">
                    <Card title="برای مساعدت با دانشجویان در دوران شیوع بیماری کرونا فراهم شد؛" subtitle="معاون اداری،مالی و عمرانی دانشگاه پیام نور ضمن ابراز همدردی با خانواده هایی که به هر نحو به دلیل شیوع بیماری کرونا و تعطیلی مشاغل در شرایط اقتصادی مطلوبی قرار ندارند..." link="" />
                    <Card title="برای مساعدت با دانشجویان در دوران شیوع بیماری کرونا فراهم شد؛" subtitle="معاون اداری،مالی و عمرانی دانشگاه پیام نور ضمن ابراز همدردی با خانواده هایی که به هر نحو به دلیل شیوع بیماری کرونا و تعطیلی مشاغل در شرایط اقتصادی مطلوبی قرار ندارند..." link="" />
                </div>
            </Content>
        </section>
    )
}

export default Posts;