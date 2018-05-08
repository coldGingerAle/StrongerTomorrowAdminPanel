import React from 'react';
import { EndpointDisplay } from '../../../EndpointDisplay';
import { CodeSnippet } from '../CodeSnippet';
import { DeleteScReqResponses } from './DeleteScReqResponses';
import { DeleteScReqParams } from './DeleteScReqParams';

export class DeleteScReq extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return(
      <div>
        <DeleteScReqParams />
        <DeleteScReqResponses />
      </div>
    )
  }
}
