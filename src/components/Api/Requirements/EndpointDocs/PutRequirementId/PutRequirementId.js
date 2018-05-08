import React from 'react';
import { EndpointDisplay } from '../../../EndpointDisplay';
import { CodeSnippet } from '../CodeSnippet';
import { PutRequirementResponses } from './PutRequirementResponses';
import { PutRequirementParams } from './PutRequirementParams';

export class PutRequirementId extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return(
      <div>
        <PutRequirementParams />
        <PutRequirementResponses />
      </div>
    )
  }
}
