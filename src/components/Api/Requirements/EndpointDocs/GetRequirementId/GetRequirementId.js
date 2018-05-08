import React from 'react';
import { EndpointDisplay } from '../../../EndpointDisplay';
import { CodeSnippet } from '../CodeSnippet';
import { GetRequirementResponses } from './GetRequirementResponses';
import { GetRequirementParams } from './GetRequirementParams';

export class GetRequirementId extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return(
      <div>
        <GetRequirementParams />
        <GetRequirementResponses />
      </div>
    )
  }
}
