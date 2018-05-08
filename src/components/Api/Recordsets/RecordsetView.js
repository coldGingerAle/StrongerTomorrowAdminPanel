import React from 'react';
import { EndpointInfo } from '../EndpointInfo';
import { EndpointDisplay } from '../EndpointDisplay';
import { GetRecordsets } from './EndpointDocs/GetRecordsets/GetRecordsets';
import { PostRecordsets } from './EndpointDocs/PostRecordsets/PostRecordsets';
import { GetRecordsetId } from './EndpointDocs/GetRecordsetId/GetRecordsetId';
import { GetRecordsetIdScholarships } from './EndpointDocs/GetRecordsetIdScholarships/GetRecordsetIdScholarships';

export class RecordsetView extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({
      endpointChosen: 'GetRecordsetId'
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
      case 'GetRecordsets':
        infoDisplayed = <GetRecordsets />;
        break;
      case 'PostRecordsets':
        infoDisplayed = <PostRecordsets />;
        break;
      case 'GetRecordsetId':
        infoDisplayed = <GetRecordsetId />;
        break;
      case 'GetRecordsetIdScholarships':
        infoDisplayed = <GetRecordsetIdScholarships />;
        break;
    }

    return(
      <div className='container-fluid' style={{height: '600'}}>
        <div className='col-md-4'>
          <EndpointInfo
          value='GetRecordsetId'
          requestType='GET'
          endpoint='/recordsets/{rs_id}'
          description= 'Retrieves a recordset with given id.'
          setChosen={this.setChosen}
          endpointChosen={this.state.endpointChosen}/>

          <EndpointInfo
          value='GetRecordsetIdScholarships'
          requestType='GET'
          endpoint='/recordsets/{rs_id}/scholarships'
          description= 'Retrieves all eligible scholarships for given recordset.'
          setChosen={this.setChosen}
          endpointChosen={this.state.endpointChosen}/>

          <EndpointInfo
          value='GetRecordsets'
          requestType='GET'
          endpoint='/recordsets'
          description= 'Retrieves all recordsets along with associated records.'
          setChosen={this.setChosen}
          endpointChosen={this.state.endpointChosen}/>

          <EndpointInfo
          value='PostRecordsets'
          requestType='POST'
          endpoint='/recordsets'
          description= 'Adds a recordset to the database.'
          setChosen={this.setChosen}
          endpointChosen={this.state.endpointChosen}/>

        </div>
        {infoDisplayed}
      </div>
    )
  }
}
