import React from 'react';
import { EndpointDisplay } from '../../../EndpointDisplay';
import { CodeSnippet } from '../CodeSnippet';
import { GetRecordsetIdScholarshipsResponses } from './GetRecordsetIdScholarshipsResponses';
import { GetRecordsetIdScholarshipsParams } from './GetRecordsetIdScholarshipsParams';

export class GetRecordsetIdScholarships extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return(
      <div>
        <GetRecordsetIdScholarshipsParams />
        <GetRecordsetIdScholarshipsResponses />
      </div>
    )
  }
}
