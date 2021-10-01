import React from 'react'
import './Newsitem.css'

const NewsItem = ({title, description, url, urlToImage}) => {
    return (
        <div className="shadow news__item">
            <img className="news__img" src={urlToImage} alt="" />
            <h3>
                <a href={url}>
                    {title}
                </a>
            </h3>

            <p>{description}</p>
        </div>
    )
}

export default NewsItem
