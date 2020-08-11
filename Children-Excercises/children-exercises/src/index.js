import React, { Children } from "react";
import ReactDOM from "react-dom";

const ErrorBox = ({ children }) => {
  return (
    <div className="alert alert-danger w-25 mx-auto">
      <i class="fa fa-exclamation-triangle" aria-hidden="true"></i> {children}
    </div>
  );
};

const Title = ({ children }) => {
  return <h1>{children}</h1>;
};

const Body = ({ children }) => {
  return <p>{children}</p>;
};

const Footer = ({ children }) => {
  return (
    <diV>
      <button>{children}</button>
    </diV>
  );
};
const Dialog = () => {
  return (
    <div>
      <Title>This is the title</Title>
      <Body>We Are here to write the text inside the body and This is </Body>
      <Footer>Submiting</Footer>
    </div>
  );
};

const App = () => {
  return (
    <div className="container row">
      <ErrorBox>Something is gone wrong</ErrorBox>
      <Dialog />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
