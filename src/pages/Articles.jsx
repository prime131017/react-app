import Posts from "../components/Posts";


const Articles = () => {
    return (
        <>
            <div className="wrapper_article">
                <div className="header_article">
                    <h1>Article List</h1>
                    <div>
                        <button className="header_button">Make big card</button>
                        <button className="header_button">Add Article</button>
                    </div>
                </div>
                <Posts/>
            </div>

        </>
    )
}

export default Articles;