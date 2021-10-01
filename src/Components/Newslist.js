import axios from 'axios';
import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem';

import './Newlist.css'


const Newslist = () => {

    const [articles, setArticles] = useState([]);
    



    useEffect(() => {
        const getArticles = async () => {
            const res = await axios.request(
                "https://newsapi.org/v2/everything?q=sport&sortBy=popularity&pageSize=80&apiKey=671ae6ca709f44349b1a024abb38538d"
                );

            setArticles(res.data.articles)
            
        }

        
        getArticles()
        
    }, [])
    console.log(articles)


    return (
        <div className="container">
            {articles.map(({title, description, url, urlToImage}) => (
                <NewsItem 
                title={title} 
                description={description} 
                url={url} 
                urlToImage={urlToImage}
                />
                ))}
        </div>
    )
}

export default Newslist
