import React from "react";
import { connect } from "react-redux";

import DevTools from "./devtool.js";

const SoundControl = ({ muted }) => {
  console.log("---------------------Sound Changed--------------------", muted);
  return (
    <div>
      你就当我是一个视频吧，音量
      <span style={{ color: "red" }}><b>{muted ? "静音" : "有声"}</b></span>
    </div>
  );
};

class A extends React.PureComponent {
  componentWillUnmount() {
    console.log("A will unmount!");
  }

  render() {
    return <img src="img/a.jpg" width="500" height="566" />;
  }
}

class B extends React.PureComponent {
  componentWillUnmount() {
    console.log("B will unmount!");
  }

  render() {
    return <img src="img/b.jpg" width="500" height="566" />;
  }
}

class App extends React.PureComponent {
  render() {
    const { isA, isB } = this.props;

    return (
      <div>
        {isA && <A />}
        {isB && <B />}
        <SoundControl muted={isA || isB} />
        <DevTools />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const { isA, isB } = state;
  return {
    isA,
    isB
  };
};

export default connect(mapStateToProps)(App);
