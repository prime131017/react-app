import React, { useState, useEffect } from 'react';
import axios from 'axios';

import ButtonView from './ButtonView';
import ButtonChangeColor from './ButtonChangeColor';
import ButtonAddArticle from './ButtonAddArticle';

const Posts = () => {

    const [buttonClicked, setButtonClicked] = useState(3);
    const [hidden, setHidden] = useState('')
    const [size, setSize] = useState('smallCard')
    const [numberOfCards, setNumberOfCards] = useState(3);
    const [article, setArticle] = useState(null);
    const [articles, setArticles] = useState([]);

    const [newArticleObj, setNewArticleObj] = useState(null)
    const [newArticlesArr, setNewArticlesArr] = useState(null)
    const [newArticlesBlock, setNewArticlesBlock] = useState([])
    const [newArticleTitle, setNewArticlTitle] = useState(null);
    const [newArticleText, setNewArticlText] = useState(null);
    const [newArticleClick, setNewArticlClick] = useState(null);


    const handleTitleChange = (titleValue, contentValue, createClick) => {
        setNewArticlTitle(titleValue)
        setNewArticlText(contentValue)
        setNewArticlClick(createClick)
    }

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios("https://jsonplaceholder.typicode.com/posts");
            if (result.data) {
                setArticles(result.data);
            } else {
                fetchData();
            }
        };
        fetchData();
    }, []);

    useEffect(() => {
        setArticle(
            articles.filter(item => item.id <= buttonClicked).map((post) =>
                <div className={"grayCard" + ' ' + size} id={post.id} key={post.id}>
                    <h2 className="card_title">{post.title}</h2>
                    <p className="card_text">{post.body}</p>
                   <ButtonView title={post.title} body={post.body} />
                     <ButtonChangeColor />
                </div>
            )
        )
    }, [articles, buttonClicked, size])

    useEffect(() => {
        setNewArticleObj({
            'userId': newArticleClick,
            'id': newArticleClick,
            'title': newArticleTitle,
            'body': newArticleText
        })

        console.log(newArticleClick)
        console.log(newArticleObj)
    }, [newArticleClick])

    useEffect(() => {
        setNewArticlesArr([...newArticlesBlock, newArticleObj])
        console.log(newArticlesArr)
    }, [newArticleObj])

    useEffect(() => {
        if (newArticleClick > 0) {
            setNewArticlesBlock(newArticlesArr.map((post) =>
                <div className={"grayCard" + ' ' + size} id={post.id} key={new Date().getTime()}>
                    <h2 className="card_title">{post.title}</h2>
                    <p className="card_text">{post.body}</p>
                    <ButtonView title={post.title} body={post.body} />
                    <ButtonChangeColor />
                </div>
            ))
        }
    }, [newArticlesArr])


    return (
        <>
            <div className="wrapper_article">
                <div className="header_article">
                    <h1>Article List</h1>
                    <div>
                        <button className="button" onClick={() => {
                            size === "smallCard" ? setSize("bigCard") : setSize("smallCard")
                            numberOfCards === 3 ? setNumberOfCards(2) : setNumberOfCards(3)
                        }}>Make big cards</button>
                                <ButtonAddArticle updateData={handleTitleChange}/>

                    </div>
                </div>
                <div className="card_wrapper">
                    {article}
                    {newArticlesBlock}
                </div>
                <div className="footer">
                    <button className="button" onClick={() => {
                        setButtonClicked(buttonClicked + numberOfCards)
                    }}>Show more</button>
                </div>
            </div>
        </>
    )
}

export default Posts