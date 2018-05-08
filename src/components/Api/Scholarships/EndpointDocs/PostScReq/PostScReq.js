import React from 'react';
import { EndpointDisplay } from '../../../EndpointDisplay';
import { CodeSnippet } from '../CodeSnippet';
import { PostScReqResponses } from './PostScReqResponses';
import { PostScReqParams } from './PostScReqParams';

export class PostScReq extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return(
      <div>
        <PostScReqParams />
        <PostScReqResponses />
      </div>
    )
  }
}
