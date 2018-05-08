import React from 'react';

export class EndpointDisplay extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    var color;
    switch(this.props.requestType) {
      case 'GET':
        color = '#61AFFE';
        break;
      case 'POST':
        color = '#49CC90';
        break;
      case 'PUT':
        color = '#FCA130';
        break;
      case 'DELETE':
        color = '#F93E3E';
        break;
    }
    return(
      <div
        style={{
          backgroundColor: 'white',
          borderStyle: 'double',
          borderColor: 'black',
          borderRadius: 10,
          padding: 10,
          fontSize: 16,
          marginTop: 20,
          width: '95%',
          marginLeft: 20,
          marginRight: 10
        }}
        className='row'>
            <span
              style={{
                backgroundColor: color,
                width: 80,
                height: '80%',
                borderRadius: 0,
                marginRight: 10,
                fontSize: 16
              }}
              className='badge pull-left'>
              {this.props.requestType}
            </span>
            <span className='pull-left' style={{fontWeight: 'bold', marginRight: 10}}>
              {this.props.endpoint}
            </span>
            <span className='pull-left' style={{}}>
              {this.props.description}
            </span>
        </div>
    )
  }
}
