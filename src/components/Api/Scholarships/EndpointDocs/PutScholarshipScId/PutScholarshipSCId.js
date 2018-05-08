import React from 'react';
import { EndpointDisplay } from '../../../EndpointDisplay';
import { CodeSnippet } from '../CodeSnippet';
import { PutScholarshipResponses } from './PutScholarshipResponses';
import { PutScholarshipParams } from './PutScholarshipParams';

export class PutScholarshipSCId extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return(
      <div>
        <PutScholarshipParams />
        <PutScholarshipResponses />
      </div>
    )
  }
}
