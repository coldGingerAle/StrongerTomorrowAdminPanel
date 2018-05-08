import React from 'react';
import { EndpointDisplay } from '../../../EndpointDisplay';
import { CodeSnippet } from '../CodeSnippet';
import { GetScholarshipResponses } from './GetScholarshipResponses';
import { GetScholarshipParams } from './GetScholarshipParams';

export class GetScholarshipSCId extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return(
      <div>
        <GetScholarshipParams />
        <GetScholarshipResponses />
      </div>
    )
  }
}
