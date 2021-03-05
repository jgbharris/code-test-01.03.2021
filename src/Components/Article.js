import React from "react";
import star from "../icon-star.svg"
import './Article.css';



export default function Article(props) {
  return (
    <div className="articleCard">
      <div className="articleBody">
        <p className="articleAuthor">{props.author}</p>
        <p className="articleHeadline">{props.headline}</p>
        <div>
          <button className="bookmarkButton" onClick={props.addBookmark}>
            ADD
            <img alt="star" className="star" src={star}></img>
          </button>
        </div>
        <img alt="articleImage" className="articleImage" src={props.imageURL}></img>
      </div>
    </div>
  );
}
