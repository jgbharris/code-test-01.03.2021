import cross from "../icon-cross.svg"
import './BookmarkedArticle.css';

export default function BookmarkedArticle(props) {
  return (
    <div className="bookmarkedArticleContainer">
      <div className="bookmarkTextContainer">
        <p className="bookmarkAuthor">{props.author}</p>
        <p className="bookmarkHeadline">{props.headline}</p>
      </div>
      <div className="bookmarkButtonContainer">
        <button className="removeBookmarkButton" onClick={props.removeBookmark}><img className="removeBookmarkButtonIcon" src={cross}></img></button>
      </div>
    </div>
  );
}
