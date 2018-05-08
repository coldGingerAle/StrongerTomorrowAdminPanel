import React from 'react';
import { EndpointDisplay } from '../../../EndpointDisplay';
import { CodeSnippet } from '../CodeSnippet';
import { PostScholarshipResponses } from './PostScholarshipResponses';
import { PostScholarshipParams } from './PostScholarshipParams';

export class PostScholarships extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return(
      <div>
        <PostScholarshipParams />
        <PostScholarshipResponses />
      </div>
    )
  }
}
