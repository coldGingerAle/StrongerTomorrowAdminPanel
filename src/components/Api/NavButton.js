import React from 'react';

export class NavButton extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return(
      <button
        style={{
          textShadow: '-1px -1px 0 black, 1px -1px 0 black, -1px 1px 0 black, 1px 1px 0 black',
          width: '25%',
          borderRadius: '50px 50px 0px 0px',
          backgroundColor: this.props.currentView == this.props.title ? 'orange' : '#777777',
          outline: 'none',
          padding: 0
        }}
        onClick={() => this.props.changeView(this.props.title)}
        className='badge'>
        <h4>{this.props.title}</h4>
      </button>
    )
  }
}
