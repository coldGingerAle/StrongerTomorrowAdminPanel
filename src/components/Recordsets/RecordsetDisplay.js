import React from 'react';

export class RecordsetDisplay extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return(
      <div
        onClick={() => this.props.changeCurrentRecordset(this.props.recordset)}
        style={{
          backgroundColor: 'white',
          borderStyle: 'double',
          borderColor: 'black',
          borderRadius: 10,
          padding: 10,
          fontSize: 14,
          marginTop: 20,
          marginLeft: 20,
          marginRight: 10,
          opacity: this.props.recordset.id == this.props.currentRecordset.id ? '1' : '0.25',
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
              className='badge pull-left'>
              Recordset <span style={{color: 'yellow'}}>{this.props.recordset.id}</span>
            </span>
            <span
              style={{
                backgroundColor: '#61AFFE',
                height: '80%',
                marginRight: 10,
                fontSize: 14,
                textShadow: '-1px -1px 0 black, 1px -1px 0 black, -1px 1px 0 black, 1px 1px 0 black',
              }}
              className='badge pull-left'>
              User Id <span style={{color: 'yellow'}}>{this.props.recordset.user_id ? this.props.recordset.user_id : 'Null'}</span>
            </span>
            <span
              style={{
                backgroundColor: '#61AFFE',
                height: '80%',
                marginRight: 10,
                fontSize: 14,
                textShadow: '-1px -1px 0 black, 1px -1px 0 black, -1px 1px 0 black, 1px 1px 0 black',
              }}
              className='badge pull-left'>
              Created <span style={{color: 'yellow'}}>{this.props.recordset.createdAt}</span>
            </span>

        </div>
    )
  }
}
