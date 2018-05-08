import React from 'react';
import { CodeSnippet } from '../CodeSnippet';

export class GetRecordsetIdScholarshipsParams extends React.Component {
  render() {
    return (
      <div className='col-md-4'  style={{maxHeight: 750, opacity: '0.9'}}>
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
          marginRight: 10
        }}>

        <div className='nav'>
          <h1
            style={{
              textShadow: '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000',
              color: '#61AFFE',
              marginTop: -5,
              marginBottom: -5
            }}>
            Parameters
          </h1>
        <hr style={{marginTop: 10, marginBottom: 10}}/>
        </div>
        <div className='row'>
          <div className='col-md-3'>
            <span className='badge pull-left' style={{backgroundColor: '#9C91EA', fontSize: 16}}>Name</span>
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
                  color: '#61AFFE',
                  marginTop: -5,
                  marginBottom: -5
                }}>
                rs_id
              </h1>
            </div>
            <div className='row' style={{marginTop: 15}}>
              <h4
                className='pull-left'
                style={{
                  color: '#61AFFE',
                  marginTop: -5,
                  marginBottom: -5
                }}>
                URI Parameter
              </h4>
            </div>
          </div>

          <div className='col-md-9' style={{textAlign: 'left'}}>
            <CodeSnippet data={'.../recordsets/3/scholarships'} />
          </div>
          </div>

        </div>
      </div>
    )
  }
}
