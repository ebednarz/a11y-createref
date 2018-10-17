import React, { createRef, Component } from 'react';

export class HelloWorld extends Component {
  constructor() {
    super();
    this.domNode = createRef();
  }

  componentDidMount() {
    this.domNode.current.addEventListener('click', this);
  }

  render() {
    return (
      <h1
        ref={this.domNode}
      >Hello, World!</h1>
    );
  }

  handleEvent() {
    alert('HELLO');
  }
}
