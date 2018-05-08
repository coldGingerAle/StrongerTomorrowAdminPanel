import React from 'react';

export class EndpointInfo extends React.Component {
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
        onClick={() => this.props.setChosen(this.props.value)}
        style={{
          backgroundColor: 'white',
          opacity: this.props.endpointChosen == this.props.value ? '1' : '0.25',
          borderStyle: 'double',
          borderColor: 'black',
          borderRadius: 10,
          padding: 10,
          fontSize: 16,
          marginTop: 20,
          width: '100%',
          marginLeft: 10,
          marginRight: 10,
          cursor: 'hand',
          cursor: 'pointer'
        }}
        className='row pull-right'>

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
            <br />
            <div className='pull-left' style={{}}>
              {this.props.description}
            </div>
        </div>
    )
  }
}
