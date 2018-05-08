import React from 'react';

export class Header extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return(
      <div className='nav'
      style={{
        backgroundColor: 'blue',
        marginBottom: 30,
        textShadow: '-1px -1px 0 black, 1px -1px 0 black, -1px 1px 0 black, 1px 1px 0 black'
      }}>
        <h1 style={{fontFamily: 'Lobster, cursive', color: 'white'}}>Excelsior Scholarship Interface</h1>
        <div className='col-md-8 col-md-offset-2'>
          <button style={{fontFamily: 'Raleway'}}
            onClick={() => this.props.setView('Scholarship')}
            className="badge"
            style={{
              textShadow: '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000',
              marginBottom: 10,
              marginRight: 10,
              width: 200,
              backgroundColor: this.props.viewShown == 'Scholarship' ? 'orange' : '#777777',
              outline: 'none'
            }}>
            <strong style={{fontSize: 15}}>Scholarship GUI</strong>
          </button>

          <button style={{fontFamily: 'Raleway'}}
            onClick={() => this.props.setView('API')}
            className="badge"
            style={{
              textShadow: '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000',
              marginBottom: 10,
              marginLeft: 10,
              width: 200,
              backgroundColor: this.props.viewShown == 'API' ? 'orange' : '#777777' ,
              outline: 'none'
            }}>
            <strong style={{fontSize: 15}}>API Documentation</strong>
          </button>

          <button style={{fontFamily: 'Raleway'}}
            onClick={() => this.props.setView('Recordsets')}
            className="badge"
            style={{
              textShadow: '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000',
              marginBottom: 10,
              marginLeft: 10,
              width: 200,
              backgroundColor: this.props.viewShown == 'Recordsets' ? 'orange' : '#777777' ,
              outline: 'none'
            }}>
            <strong style={{fontSize: 15}}>Recordsets</strong>
          </button>


        </div>
      </div>
    )
  }
}
