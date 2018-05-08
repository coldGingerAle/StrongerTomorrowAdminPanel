import React from 'react';
import { EndpointDisplay } from '../../../EndpointDisplay';
import { CodeSnippet } from '../CodeSnippet';
import { DeleteRequirementResponses } from './DeleteRequirementResponses';
import { DeleteRequirementParams } from './DeleteRequirementParams';

export class DeleteRequirementsCId extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return(
      <div>
        <DeleteRequirementParams />
        <DeleteRequirementResponses />
      </div>
    )
  }
}
