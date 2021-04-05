import React, { Component } from 'react';

export default class ColorBox extends Component {

  state = {
    todos: [
      
    ]
  }

  render() {
    let opacityProp = this.props.opacity
    return (
      <div className="color-box" style={{opacity: opacityProp}}>
        {opacityProp >= 0.2 ? 
          <ColorBox opacity={opacityProp - 0.1} />
          : opacityProp = null}
      </div>
    )
  }

}

