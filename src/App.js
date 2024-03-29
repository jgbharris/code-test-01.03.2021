import React, { useState, useEffect } from "react";
import './App.css';
import Article from './Components/Article.js'
import BookmarkedArticle from './Components/BookmarkedArticle.js'
import logo from "./spectator-logo.jpg"
/* eslint-disable no-unused-expressions */

function App() {

  const [data, setData] = useState([]);
  const [bookmarks, setBookmarks] = useState([]);
  const API_KEY = "54ac327df69d4eb49e777769fc01aae8" // Would normally put in .env file but have left it in so it works straight out of the box

// Fetch data from API -----------------------------------------------------------------------------

  useEffect(() => {
    fetch(`https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=${API_KEY}`)
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  let articles = data.articles;

  // Loop over data and give each an id ----------------------------------------------------------------------

  articles ? articles.forEach((item, i) => {
    item.id = i + 1;
  }) : null

  let bookmarkedArticles = [...bookmarks]

   // Add artcile to bookmarks, checks to see if already in array ----------------------------------------------------------------------

  function addBookmark(article) {
    if (bookmarkedArticles.indexOf(article) === -1) {
      bookmarkedArticles.push(article)
    }
    setBookmarks(bookmarkedArticles)
  }

  // Remove article from bookmarks, filters based on id ----------------------------------------------------------------------

  function removeBookmark(article) {
    const articleId = article.id
    let newList = bookmarkedArticles.filter(item => item.id !== articleId)
    setBookmarks(newList)
  }

  console.log(bookmarks)

  return (
    <div className="App">
      <img alt="logo" className="logo" src={logo}></img>
      <div className="articlesList">
        {articles ? articles.map((article) => (
          <Article
            key={article.id}
            addBookmark={() => addBookmark(article)}
            headline={article.title}
            author={article.author}
            imageURL={article.urlToImage} />
        )) : null}
      </div>
      <div className="bookmarksList">
        <p className="yourBookmarks">Your bookmarks</p>
        <p className="bookMarksSubHeading">Articles you bookmark will be added to this list</p>
        {bookmarks ? bookmarks.map((article) => (
          <BookmarkedArticle
            key={article.id}
            removeBookmark={() => removeBookmark(article)}
            headline={article.title}
            author={article.author} />
        )) : null}

      </div>
    </div>
  );
}

export default App;
