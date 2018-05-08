import React from 'react';
import { EndpointDisplay } from '../../../EndpointDisplay';
import { CodeSnippet } from '../CodeSnippet';
import { PutScReqResponses } from './PutScReqResponses';
import { PutScReqParams } from './PutScReqParams';

export class PutScReq extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return(
      <div>
        <PutScReqParams />
        <PutScReqResponses />
      </div>
    )
  }
}
