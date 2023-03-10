import React, { useState, useEffect } from "react";
import axios from 'axios';
import ButtonView from "../components/ButtonView";
import ButtonChangeColor from "../components/ButtonChangeColor";

const Users = () => {
    const [buttonClicked, setButtonClicked] = useState(3);
    const [hidden, setHidden] = useState('')
    const [size, setSize] = useState('smallCard')
    const [numberOfCards, setNumberOfCards] = useState(3);
    const [article, setArticle] = useState(null);
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios("https://jsonplaceholder.typicode.com/users");
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
                    <h2 className="card_title">{post.name}</h2>
                    <p className="card_text">{post.email}</p>
                    <p className="card_text">{post.phone}</p>
                    <ButtonView title={post.name} email={post.email} phone={post.phone} />
                    <ButtonChangeColor />
                </div>
            )
        )
    }, [articles, buttonClicked, size])

    return (
        <>
            <div className="wrapper_article">
                <div className="header_article">
                    <h1 className="articleList">Users List</h1>
                    <button className="button" onClick={() => {
                        size === "smallCard" ? setSize("bigCard") : setSize("smallCard")
                        numberOfCards === 3 ? setNumberOfCards(2) : setNumberOfCards(3)
                    }}>Make big cards</button>
                </div>
                <div className="card_wrapper">
                    {article}
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

export default Users