import React from 'react'

const Heading = (props) => {
    const { title, subtitle } = props
    return (
        <div className="app-heading">
            <h1>{title}</h1>
            <h2>{subtitle}</h2>
            <div className="divider divider-dots"></div>
        </div>
    )
}

export default Heading