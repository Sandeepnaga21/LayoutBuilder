import {Component} from 'react'
import ConfigurationContext from '../../context/ConfigurationContext'

import './index.css'

class ConfigurationController extends Component {
  state = {
    isContentClicked: false,
    isLeftNavbarClicked: false,
    isRightNavbarClicked: false,
  }

  onClickContent = () => {
    this.setState(prevState => ({
      isContentClicked: !prevState.isContentClicked,
    }))
  }

  onClickLeftNavbar = () => {
    this.setState(prevState => ({
      isLeftNavbarClicked: !prevState.isLeftNavbarClicked,
    }))
  }

  onClickRightNavbar = () => {
    this.setState(prevState => ({
      isRightNavbarClicked: !prevState.isRightNavbarClicked,
    }))
  }

  render() {
    return (
      <div className="Configuration-Controller">
        <h1 className="title">Layout</h1>
        <div>
          <input id="checkbox" type="checkbox" onClick={this.onClickContent} />
          <label htmlFor="checkbox">Content</label>
          <input
            id="checkbox"
            type="checkbox"
            onClick={this.onClickLeftNavbar}
          />
          <label htmlFor="checkbox">Left Navbar</label>
          <input
            id="checkbox"
            type="checkbox"
            onClick={this.onClickRightNavbar}
          />
          <label htmlFor="checkbox">Right Navbar</label>
        </div>
      </div>
    )
  }
}

export default ConfigurationController
