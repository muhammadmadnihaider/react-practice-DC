import React from "react";
import ReactDOM from "react-dom";
import moment from "moment";
import PropTypes from "prop-types";
import "./index.css";

const testTweet = {
  message: "Something about cats.",
  gravatar: "xyz",
  author: {
    handle: "catperson",
    name: "I AM A Cat Person",
  },
  likes: 2,
  retweets: 17,
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

function getRetweetCount(count) {
  if (count > 0) {
    return <span className="retweet-count">{count}</span>;
  } else {
    return null;
  }
}
const RetweetButton = ({ count }) => {
  return (
    <span className="retweet-button">
      <i className="fa fa-retweet" />
      {getRetweetCount(count)}
    </span>
  );
};
const LikeButton = ({ count }) => (
  <span className="like-button">
    <i className="fa fa-heart" />
    {count > 0 && <span className="like-count">{count}</span>}
  </span>
);
const MoreOptionsButton = () => (
  <i className="fa fa-ellipsis-h more-options-button" />
);

RetweetButton.propTypes = {
  count: PropTypes.number,
};
LikeButton.propTypes = {
  count: PropTypes.number,
};

Author.propTypes = {
  author: PropTypes.shape({
    name: PropTypes.string.isRequired,
    handle: PropTypes.string.isRequired,
  }).isRequired,
};

Avatar.propTypes = {
  hash: PropTypes.string.isRequired,
};
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
          <RetweetButton count={tweet.retweets} />
          <LikeButton count={tweet.likes} />
          <MoreOptionsButton />
        </div>
      </div>
    </div>
  );
}

Tweet.propTypes = {
  tweet: PropTypes.shape({
    message: PropTypes.string.isRequired,
    gravatar: PropTypes.string.isRequired,
    author: PropTypes.shape({
      handle: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired,
    likes: PropTypes.number.isRequired,
    retweets: PropTypes.number.isRequired,
    timestamp: PropTypes.string.isRequired,
  }).isRequired,
};

ReactDOM.render(<Tweet tweet={testTweet} />, document.querySelector("#root"));
