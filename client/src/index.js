import React from 'react'
import ReactDom from 'react-dom'

function HelloWorld() {
  return <h4>Hello World</h4>;
}

ReactDom.render(<HelloWorld />, document.getElementById('root'));