import React from 'react';
import { EndpointDisplay } from '../../../EndpointDisplay';
import { CodeSnippet } from '../CodeSnippet';
import { PostRequirementResponses } from './PostRequirementResponses';
import { PostRequirementParams } from './PostRequirementParams';

export class PostRequirements extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return(
      <div>
        <PostRequirementParams />
        <PostRequirementResponses />
      </div>
    )
  }
}
