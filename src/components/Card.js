import React from 'react'

export default ({post}) => {
    const { title, body } = post
    return (
        <div className="card">
            <div className="card-date">
                <span>پنجشنبه</span>
                <span> 1399/1/21</span>
            </div>
            <div className="card-body">
                <h3>{title}</h3>
                <p>{body}</p>
                <button className="button button-sm">ادامه مطلب</button>
            </div>
        </div>
    )
}
