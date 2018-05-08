import React from 'react';
import { EndpointDisplay } from '../../../EndpointDisplay';
import { CodeSnippet } from '../CodeSnippet';
import { PostRecordsResponses } from './PostRecordsResponses';
import { PostRecordsParams } from './PostRecordsParams';

export class PostRecords extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return(
      <div>
        <PostRecordsParams />
        <PostRecordsResponses />
      </div>
    )
  }
}
