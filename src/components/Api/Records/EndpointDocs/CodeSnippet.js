import React from 'react';

export class CodeSnippet extends React.Component {
  render() {
    return (
      <div className='pull-left' style={{textAlign: 'left'}}>
        <pre style={{backgroundColor: '#41444E', color: 'yellow', fontSize: this.props.fontSize}}>
          {JSON.stringify(this.props.data, null, 2) }
        </pre>
      </div>
    )
  }
}
