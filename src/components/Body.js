import React from 'react';
import {Scholarships} from './Scholarships';
import {Requirements} from './Requirements';

export class Body extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return(
      <div
        className='container-fluid'>
        
        <div className='row'>

          <Scholarships
          scholarships={this.props.scholarships}
          requirements={this.props.requirements}
          updateApp={this.props.updateApp}/>

          <Requirements
          scholarships={this.props.scholarships}
          requirements={this.props.requirements}
          updateApp={this.props.updateApp}/>
        </div>
      </div>
    )
  }
}
