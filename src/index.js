import React from "react";
import ReactDOM from "react-dom";
import moment from "moment";
import "./index.css";

const testTweet = {
  message: "Something about cats.",
  gravatar: "xyz",
  author: {
    handle: "catperson",
    name: "I AM A Cat Person",
  },
  likes: 2,
  retweets: 0,
  timestamp: "2016-07-30 21:24:37",
};

function Avatar({ hash }) {
  return (
    <img
      src={`https://www.gravatar.com/avatar/nothing${hash}`}
      className="avatar"
      alt="avatar"
    />
  );
}
function Message({ text }) {
  return <div className="message">{text}</div>;
}

function Author({ author }) {
  return (
    <span className="author">
      <span className="name">{author.name}</span>
      <span className="handle">@{author.handle}</span>
    </span>
  );
}
const Time = ({ time }) => (
  <span className="time">{moment(time).fromNow()}</span>
);
const ReplyButton = () => <i className="fa fa-reply reply-button" />;
const RetweetButton = () => <i className="fa fa-retweet retweet-button" />;
const LikeButton = () => <i className="fa fa-heart like-button" />;
const MoreOptionsButton = () => (
  <i className="fa fa-ellipsis-h more-options-button" />
);

function Tweet({ tweet }) {
  return (
    <div className="tweet">
      <Avatar hash={tweet.gravatar} />
      <div className="content">
        <Author author={tweet.author} />
        <Time time={tweet.timestamp} />

        <Message text={tweet.message} />

        <div className="buttons">
          <ReplyButton />
          <RetweetButton />
          <LikeButton />
          <MoreOptionsButton />
        </div>
      </div>
    </div>
  );
}

ReactDOM.render(<Tweet tweet={testTweet} />, document.querySelector("#root"));
