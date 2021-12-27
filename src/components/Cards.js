import React from 'react'

function Cards(props) {
    return (
        <div className="ui card">
            <div className="image">
                <img src={props.imgsrc}/>
            </div>
            <div className="content">
                <a className="header">{props.name}</a>
                <div className="meta">
                    <span className="date">Joined in 2013</span>
                </div>
                <div className="description">
                    {props.desc}
                </div>
            </div>
            <div className="extra content">
                <a>
                    <i className="user icon"></i>
                    22 Friends
                </a>
            </div>
        </div>
    )
}

export default Cards
