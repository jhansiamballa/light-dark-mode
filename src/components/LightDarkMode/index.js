// Write your code here
import {Component} from 'react'

import './index.css'

class LightDarkMode extends Component {
  state = {lightMode: true}

  onChangeMode = () => {
    this.setState(prevState => ({lightMode: !prevState.lightMode}))
  }

  getButtonText = () => {
    const {lightMode} = this.state

    return lightMode ? 'Light Mode' : 'Dark Mode'
  }

  onChangeClass = () => {
    const {lightMode} = this.state
    return lightMode ? 'dark-mode' : 'light-mode'
  }

  render() {
    const buttonText = this.getButtonText()
    const ClassText = this.onChangeClass()
    return (
      <div className="app-container">
        <div className={ClassText}>
          <h1>Click To Change Mode</h1>
          <button type="button" className="button" onClick={this.onChangeMode}>
            {buttonText}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
