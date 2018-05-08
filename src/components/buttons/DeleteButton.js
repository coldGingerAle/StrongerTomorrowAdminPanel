import React from 'react';

export class DeleteButton extends React.Component {
  render() {
    return(
      <button style={{fontFamily: 'Raleway'}}
        onClick={this.props.onClick}
        className="badge"
        style={{
          textShadow: '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000',
          marginBottom: 10,
          marginLeft: 10,
          backgroundColor: 'red'
        }}>
        <strong style={{fontSize: 15}}><i className="fa fa-trash-o" aria-hidden="true"></i> Delete {this.props.text}</strong>
      </button>
    )
  }
}
