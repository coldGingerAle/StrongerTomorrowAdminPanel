import React from 'react';
import { EndpointDisplay } from '../../../EndpointDisplay';
import { CodeSnippet } from '../CodeSnippet';

export class GetRecordsets extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return(
      <div className='col-md-5 col-md-offset-1'  style={{maxHeight: 750, opacity: '0.9'}}>
        <div style={{
          backgroundColor: 'white',
          borderStyle: 'double',
          borderColor: 'black',
          borderRadius: 10,
          padding: 10,
          fontSize: 16,
          marginTop: 20,
          width: '95%',
          marginLeft: 20,
          marginRight: 10,
        }}>
          <div className='nav'>
            <h1
              style={{
                textShadow: '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000',
                color: 'yellow',
                marginTop: -5,
                marginBottom: -5
              }}>
              Responses
            </h1>
          <hr style={{marginTop: 10, marginBottom: 10}}/>
          </div>
          <div className='row'>
            <div className='col-md-3'>
              <span className='badge pull-left' style={{backgroundColor: '#9C91EA', fontSize: 16}}>Status Code</span>
            </div>
            <div className='col-md-9'>
              <span className='badge pull-left' style={{backgroundColor: '#0091EA', fontSize: 16, marginLeft: 11}}>Example Value</span>
            </div>
          </div>
          <hr style={{marginTop: 10, marginBottom: 10}}/>
          <div className='row' style={{marginLeft: 0}}>
          <div className='col-md-3'>
            <div className='row'>
              <h1
                className='pull-left'
                style={{
                  textShadow: '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000',
                  color: '#69F98A',
                  marginTop: -5,
                  marginBottom: -5
                }}>
                200
              </h1>
            </div>
            <div className='row' style={{marginTop: 10}}>
              <h4
                className='pull-left'
                style={{
                  color: '#69F98A',
                  marginTop: -5,
                  marginBottom: -5
                }}>
                OK
              </h4>
            </div>
          </div>
            <div className='col-md-9' style={{textAlign: 'left'}}>
              <CodeSnippet data={{
                "status": "success",
                "data": {
                  "recordsets": [
                    {
                      "id": 3,
                      "user_id": null,
                      "createdAt": "2017-07-19T19:41:21.329Z",
                      "updatedAt": "2017-07-19T19:41:21.329Z",
                      "records": [
                        {
                          "id": 12,
                          "rs_id": 3,
                          "req_id": 25,
                          "value": "1",
                          "createdAt": "2017-07-19T19:41:55.681Z",
                          "updatedAt": "2017-07-19T19:41:55.681Z"
                        }
                      ]
                    }
                  ]
                }
              }} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
