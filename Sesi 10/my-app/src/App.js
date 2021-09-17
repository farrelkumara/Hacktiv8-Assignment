import "./App.css";
import React from "react";

class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <h1>My First React App</h1>
      </header>
    );
  }
}

class Content extends React.Component {
  render() {
    return (
      <div className="content">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          vitae leo a magna faucibus aliquam. Aenean blandit iaculis massa, eget
          hendrerit tortor auctor in. Suspendisse vitae odio a nunc laoreet
          cursus et vitae sapien. Praesent vel dolor sed nulla pulvinar placerat
          posuere et sem. Aenean ante justo, venenatis et fringilla eget, congue
          at arcu. Nam vulputate felis gravida faucibus efficitur. Nullam vitae
          justo ut purus blandit condimentum. Morbi consectetur pulvinar
          lobortis. Praesent et nisi id sem ultricies pulvinar. Ut eu feugiat
          quam. Suspendisse tempor auctor lorem non tincidunt.
        </p>
      </div>
    );
  }
}

class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <p>&copy; My self - 2021</p>
      </div>
    );
  }
}

class Users extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "",
    };
  }

  setUsername = () => {
    this.setState({
      username: "user01",
    });
  };

  render() {
    return (
      <div>
        <h1>{this.state.username}</h1>
        <br />
        <button onClick={this.setUsername}>Set Username</button>
      </div>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Header />
        <hr />
        <Content />
        <hr />
        <Footer />
        <hr />
        <Users />
      </div>
    );
  }
}

export default App;
