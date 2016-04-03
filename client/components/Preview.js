/* @flow */
import React from 'react'
import marked from 'marked'

const Preview = (props) => {
  const markdownToText = () => {
    const text = marked(props.md, { sanitize: true })
    return { __html: text }
  }

  return (
    <div className="editor-preview">
      <span
        className="preview-main"
        dangerouslySetInnerHTML={markdownToText()}
      />
    </div>
  )
}

Preview.propTypes = {
  md: React.PropTypes.string,
}

export default Preview
