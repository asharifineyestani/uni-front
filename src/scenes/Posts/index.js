import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useRouteMatch } from 'react-router-dom'
import Heading from '../../components/Heading'
import Content from '../../components/Content'
import Card from '../../components/Card'
import api from '../../api'

function Posts(props) {

    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(`${api}/posts`);
            setData(result.data.data);
        };
        fetchData();
    }, []);

    let match = useRouteMatch();

    return (
        <section className="section section-blog">
            <Content>
                <Heading title="معرفی شرکت برنامه نویسی افـراکـد" subtitle="با بیش از 7 سال سابقه درخشان در عرصه اپلیکیش نویسی" />
                <div className="timeline">
                    {(data && data.length) ? (data.map((post, i) => <Card key={i} {...post} prefix={match.url} />)) : <props className="alert alert-loading">لطفا صبر کنید...</props>}
                </div>
            </Content>
        </section>
    )
}

export default Posts;