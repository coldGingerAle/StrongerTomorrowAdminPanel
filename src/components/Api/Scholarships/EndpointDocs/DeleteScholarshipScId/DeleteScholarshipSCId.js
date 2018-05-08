import React from 'react';
import { EndpointDisplay } from '../../../EndpointDisplay';
import { CodeSnippet } from '../CodeSnippet';
import { DeleteScholarshipResponses } from './DeleteScholarshipResponses';
import { DeleteScholarshipParams } from './DeleteScholarshipParams';

export class DeleteScholarshipSCId extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return(
      <div>
        <DeleteScholarshipParams />
        <DeleteScholarshipResponses />
      </div>
    )
  }
}
