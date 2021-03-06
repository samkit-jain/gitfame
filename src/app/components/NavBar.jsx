import React from 'react';
import { Link as To } from 'react-router-dom';
import { FaCodeFork as Fork } from 'react-icons/lib/fa';

class NavBar extends React.Component {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    console.log('Render Navbar');
    return (
      <header className="site-header">
        <div className="logo">
          <To to="/"><Fork />gitfame</To>
        </div>
        <div className="pull">
          <a href="/">How this works</a>
        </div>
        <div className="git-btn-grp pull-right">
          <a
            className="github-button"
            href="https://github.com/hereisnaman/gitfame"
            data-icon="octicon-star"
            data-show-count="true"
            aria-label="Star hereisnaman/gitfame on GitHub"
          >Star
          </a>
          <a
            className="github-button"
            href="https://github.com/hereisnaman/gitfame/fork"
            data-icon="octicon-repo-forked"
            data-show-count="true"
            aria-label="Fork hereisnaman/gitfame on GitHub"
          >Fork
          </a>
        </div>
      </header>
    );
  }
}

export default NavBar;
