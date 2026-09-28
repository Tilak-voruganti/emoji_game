import {Component} from 'react'
import './index.css'

class NavBar extends Component {
  renderScores = () => {
    const {currentScore, topScore} = this.props

    return (
      <div className="scores-container">
        <p className="score">Score: {currentScore}</p>
        <p className="score">Top Score: {topScore}</p>
      </div>
    )
  }

  render() {
    const {isGameInProgress} = this.props

    return (
      <nav className="nav-bar-container">
        <div className="title-with-score-container">
          <div className="logo-and-title-container">
            <img
              className="emoji-logo"
              src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
              alt="emoji logo"
            />
            <h1 className="title">Emoji Game</h1>
          </div>
          {isGameInProgress && this.renderScores()}
        </div>
      </nav>
    )
  }
}

export default NavBar