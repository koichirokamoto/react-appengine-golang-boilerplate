/* @flow */
import React from 'react'
import Preview from './Preview'

export default class Editor extends React.Component {
  constructor(props) {
    super(props)
    this.state = { text: '' }
    this.handleChanged = this.handleChanged.bind(this)
  }

  handleChanged(e) {
    this.setState({ text: e.target.value })
  }

  render() {
    return (
      <div>
        <div className="editor-main">
          <textarea
            className="editor-area"
            value={this.state.text}
            onChange={this.handleChanged}
            />
        </div>
        <Preview md={this.state.text} />
      </div>
    )
  }
}
