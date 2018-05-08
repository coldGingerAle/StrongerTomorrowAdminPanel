import React from 'react';
import { EndpointDisplay } from '../../../EndpointDisplay';
import { CodeSnippet } from '../CodeSnippet';
import { GetRecordsetIdResponses } from './GetRecordsetIdResponses';
import { GetRecordsetIdParams } from './GetRecordsetIdParams';

export class GetRecordsetId extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return(
      <div>
        <GetRecordsetIdParams />
        <GetRecordsetIdResponses />
      </div>
    )
  }
}
