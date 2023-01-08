import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Posts = () =>{




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
             <div className={"greenCard" + ' ' + size} id={post.id}  key={post.id}>
             <h3 className="articleHeader">{post.title}</h3>
             <p className="text">{post.body}</p>
             <button>View</button>
             <button>Change color</button>
             </div> 
          )
        )
        }, [articles, buttonClicked, size])



    return(
        

    )
}

export default Posts