import React from 'react';

export class Record extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    var requirement_name = this.props.requirements.find((requirement) => {
        return requirement.id == this.props.record.req_id
    }).name
    return(
      <div className='text-center'>
        <div
          style={{
            backgroundColor: '#20AA2A',
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
                  backgroundColor: '#20AA2A',
                  height: '80%',
                  marginRight: 10,
                  fontSize: 14,
                  textShadow: '-1px -1px 0 black, 1px -1px 0 black, -1px 1px 0 black, 1px 1px 0 black'
                }}
                className='badge pull-left'>
              <span style={{color: 'yellow'}}>{requirement_name}</span>
              </span>
              <span
                style={{
                  backgroundColor: '#61AFFE',
                  height: '80%',
                  marginRight: 10,
                  fontSize: 14,
                  textShadow: '-1px -1px 0 black, 1px -1px 0 black, -1px 1px 0 black, 1px 1px 0 black'
                }}
                className='badge pull-right'>
                <span style={{color: 'yellow'}}>{this.props.record.value}</span>
              </span>
          </div>
      </div>
    )
  }
}
