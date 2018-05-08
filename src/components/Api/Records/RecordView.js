import React from 'react';
import { EndpointInfo } from '../EndpointInfo';
import { EndpointDisplay } from '../EndpointDisplay';
import { GetRecords } from './EndpointDocs/GetRecords/GetRecords';
import { PostRecords } from './EndpointDocs/PostRecords/PostRecords';

export class RecordView extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({
      endpointChosen: 'GetRecord'
    })
    this.setChosen = this.setChosen.bind(this);
  }
  setChosen(endpoint) {
    this.setState({
      endpointChosen: endpoint
    })
  }
  render() {
    var infoDisplayed;
    switch(this.state.endpointChosen) {
      case 'GetRecord':
        infoDisplayed = <GetRecords />;
        break;
      case 'PostRecord':
        infoDisplayed = <PostRecords />;
        break;
    }

    return(
      <div className='container-fluid' style={{height: '600'}}>
        <div className='col-md-4'>

          <EndpointInfo
          value='GetRecord'
          requestType='GET'
          endpoint='/records'
          description= 'Retrieves all records.'
          setChosen={this.setChosen}
          endpointChosen={this.state.endpointChosen}/>

          <EndpointInfo
          value='PostRecord'
          requestType='POST'
          endpoint='/records'
          description= 'Adds a record to the database.'
          setChosen={this.setChosen}
          endpointChosen={this.state.endpointChosen}/>

        </div>
        {infoDisplayed}
      </div>
    )
  }
}
