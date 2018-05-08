import { RequirementsChild } from './RequirementsChild';
import { NewRequirement } from './NewRequirement';
import { DeleteButton } from './buttons/DeleteButton';
import { DoubleHR } from './horizontalruler/DoubleHR';
import React from 'react';

export class Requirements extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className='col-md-6'>
        <div className='col-md-5 well' style={{backgroundColor: '#1B5E20', width: '80%'}}>
          <div style={{fontFamily: 'Lobster, sans-serif', marginBottom: 10}}>
            <h1 style={{color: 'white'}}>Requirements</h1>
          </div>
          <NewRequirement updateApp = {this.props.updateApp}/>
          <DoubleHR />
          {this.props.requirements.map(requirement => {
            return (
              <div>
                <div className='row'>
                  <div className='col-md-10 col-md-offset-1'>
                    <RequirementsChild
                      requirement={requirement}
                      updateApp = {this.props.updateApp}
                      requirementList = {this.props.requirements}/>
                  </div>
                </div>
                <div className='col-md-10 col-md-offset-1'>
                  <hr style={{borderTop: '3px thin #8c8b8b', marginTop: 10, marginBottom: 10}}/>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}
