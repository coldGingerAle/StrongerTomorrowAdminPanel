import React from 'react';
import { EndpointInfo } from '../EndpointInfo';
import { EndpointDisplay } from '../EndpointDisplay';
import { GetRequirements } from './EndpointDocs/GetRequirements/GetRequirements';
import { PostRequirements } from './EndpointDocs/PostRequirements/PostRequirements';
import { PutRequirementId } from './EndpointDocs/PutRequirementId/PutRequirementId';
import { DeleteRequirementsCId } from './EndpointDocs/DeleteRequirementId/DeleteRequirementId';
import { GetRequirementId } from './EndpointDocs/GetRequirementId/GetRequirementId';

export class RequirementView extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({
      endpointChosen: 'GetRequirementId'
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
      case 'GetRequirements':
        infoDisplayed = <GetRequirements />;
        break;
      case 'PostRequirements':
        infoDisplayed = <PostRequirements />;
        break;
      case 'PutRequirementId':
        infoDisplayed = <PutRequirementId />;
        break;
      case 'DeleteRequirementId':
        infoDisplayed = <DeleteRequirementsCId />;
        break;
      case 'GetRequirementId':
        infoDisplayed = <GetRequirementId />;
        break;
    }

    return(
      <div className='container-fluid' style={{height: '600'}}>
        <div className='col-md-4'>
          <EndpointInfo
          value='GetRequirementId'
          requestType='GET'
          endpoint='/requirements/{req_id}'
          description= 'Retrieves a requirement with given id.'
          setChosen={this.setChosen}
          endpointChosen={this.state.endpointChosen}/>

          <EndpointInfo
          value='GetRequirements'
          requestType='GET'
          endpoint='/requirements'
          description= 'Returns all requirements along with associated scholarships.'
          setChosen={this.setChosen}
          endpointChosen={this.state.endpointChosen}/>

          <EndpointInfo
          value='PostRequirements'
          requestType='POST'
          endpoint='/requirements'
          description= 'Adds a requirement to the database with provided name.'
          setChosen={this.setChosen}
          endpointChosen={this.state.endpointChosen}/>

          <EndpointInfo
          value='PutRequirementId'
          requestType='PUT'
          endpoint='/requirements/{req_id}'
          description= 'Updates the name of a requirement with given id.'
          setChosen={this.setChosen}
          endpointChosen={this.state.endpointChosen}/>

          <EndpointInfo
          value='DeleteRequirementId'
          requestType='DELETE'
          endpoint='/requirements/{req_id}'
          description= 'Deletes a requirement with given id.'
          setChosen={this.setChosen}
          endpointChosen={this.state.endpointChosen}/>
        </div>
        {infoDisplayed}
      </div>
    )
  }
}
