import React from 'react';

export class EligibleScholarship extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <div className='text-center'>
        <div
          style={{
            backgroundColor: '#61AFFE',
            borderStyle: 'double',
            borderColor: 'white',
            borderRadius: 10,
            padding: 10,
            fontSize: 14,
            marginTop: 20,
            marginLeft: 20,
            marginRight: 10,
            cursor: 'hand',
            cursor: 'pointer'
          }}
          className='row'>
          <span
            style={{
              backgroundColor: '#61AFFE',
              height: '80%',
              marginRight: 10,
              fontSize: 14,
              textShadow: '-1px -1px 0 black, 1px -1px 0 black, -1px 1px 0 black, 1px 1px 0 black'
            }}
            className='badge'>
          <span style={{color: 'yellow'}}>{this.props.scholarship.name}</span>
          </span>
          </div>
      </div>
    )
  }
}
