import React from 'react'
import moment from 'moment-jalaali'
import { Link } from 'react-router-dom'

export default (props) => {
    const { title, body, slug, created_at } = props


    console.log(created_at)
    return (
        <div className="card">
            <div className="card-date">
                <span>نوشته شده در تاریخ {moment(created_at).format('jYYYY/jM/jD')}</span>
            </div>
            <div className="card-body">
                <h3><Link to={slug}>{title}</Link></h3>
                <p>{body}</p>
                <button className="button button-sm">
                    <Link to={slug}>ادامه مطلب</Link>
                </button>
            </div>
        </div>
    )
}
