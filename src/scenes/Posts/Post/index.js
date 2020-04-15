import React, { useState, useEffect } from 'react'
import axios from 'axios'
import moment from 'moment-jalaali'
import { useParams } from 'react-router-dom'
import Heading from '../../../components/Heading'
import Content from '../../../components/Content'
import api from '../../../api'

const Post = (props) => {
    let { slug } = useParams();

    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios.get(`${api}/posts/${slug}`);
            setData(result.data.data);
        };
        fetchData();
    }, []);

    return (
        <div className="section section-post">
            <Content>
                <Heading title={data.title}/>
                <div className="post-content">
                    <p>{data.body}</p>
                </div>
            </Content>
        </div>
    )
}

export default Post