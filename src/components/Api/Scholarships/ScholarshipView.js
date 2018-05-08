import React from 'react';
import { EndpointInfo } from '../EndpointInfo';
import { EndpointDisplay } from '../EndpointDisplay';
import { GetScholarships } from './EndpointDocs/GetScholarships/GetScholarships';
import { PostScholarships } from './EndpointDocs/PostScholarships/PostScholarships';
import { PutScholarshipSCId } from './EndpointDocs/PutScholarshipScId/PutScholarshipSCId';
import { DeleteScholarshipSCId } from './EndpointDocs/DeleteScholarshipScId/DeleteScholarshipSCId';
import { GetScholarshipSCId } from './EndpointDocs/GetScholarshipScId/GetScholarshipSCId';
import { PostScReq } from './EndpointDocs/PostScReq/PostScReq';
import { PutScReq } from './EndpointDocs/PutScReq/PutScReq';
import { DeleteScReq } from './EndpointDocs/DeleteScReq/DeleteScReq';

export class ScholarshipView extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({
      endpointChosen: 'PostScReq'
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
      case 'GetScholarships':
        infoDisplayed = <GetScholarships />;
        break;
      case 'PostScholarships':
        infoDisplayed = <PostScholarships />;
        break;
      case 'PutScholarshipSCId':
        infoDisplayed = <PutScholarshipSCId />;
        break;
      case 'DeleteScholarshipSCId':
        infoDisplayed = <DeleteScholarshipSCId />;
        break;
      case 'GetScholarshipSCId':
        infoDisplayed = <GetScholarshipSCId />;
        break;
      case 'PostScReq':
        infoDisplayed = <PostScReq />;
        break;
      case 'PutScReq':
        infoDisplayed = <PutScReq />;
        break;
      case 'DeleteScReq':
        infoDisplayed = <DeleteScReq />;
        break;
    }

    return(
      <div className='container-fluid' style={{height: '600'}}>
        <div className='col-md-4'>
          <EndpointInfo
          value='GetScholarshipSCId'
          requestType='GET'
          endpoint='/scholarships/{sc_id}'
          description= 'Retrieves a scholarship with given id.'
          setChosen={this.setChosen}
          endpointChosen={this.state.endpointChosen}/>

          <EndpointInfo
          value='GetScholarships'
          requestType='GET'
          endpoint='/scholarships'
          description= 'Returns all scholarships along with associated requirements.'
          setChosen={this.setChosen}
          endpointChosen={this.state.endpointChosen}/>

          <EndpointInfo
          value='PostScholarships'
          requestType='POST'
          endpoint='/scholarships'
          description= 'Adds a scholarship to the database with provided name.'
          setChosen={this.setChosen}
          endpointChosen={this.state.endpointChosen}/>

          <EndpointInfo
          value='PostScReq'
          requestType='POST'
          endpoint='/scholarships/{sc_id}/requirements/{req_id}'
          description= 'Associates a new requirement with a scholarship.'
          setChosen={this.setChosen}
          endpointChosen={this.state.endpointChosen}/>

          <EndpointInfo
          value='PutScholarshipSCId'
          requestType='PUT'
          endpoint='/scholarships/{sc_id}'
          description= 'Updates the name of a scholarship with given id.'
          setChosen={this.setChosen}
          endpointChosen={this.state.endpointChosen}/>

          <EndpointInfo
          value='PutScReq'
          requestType='PUT'
          endpoint='/scholarships/{sc_id}/requirements/{req_id}'
          description= 'Updates a requirement associated with a scholarship.'
          setChosen={this.setChosen}
          endpointChosen={this.state.endpointChosen}/>

          <EndpointInfo
          value='DeleteScholarshipSCId'
          requestType='DELETE'
          endpoint='/scholarships/{sc_id}'
          description= 'Deletes a scholarship with given id.'
          setChosen={this.setChosen}
          endpointChosen={this.state.endpointChosen}/>

          <EndpointInfo
          value='DeleteScReq'
          requestType='DELETE'
          endpoint='/scholarships/{sc_id}/requirements/{req_id}'
          description= 'Removes an associated requirement from a scholarship.'
          setChosen={this.setChosen}
          endpointChosen={this.state.endpointChosen}/>
        </div>
        {infoDisplayed}
      </div>
    )
  }
}
