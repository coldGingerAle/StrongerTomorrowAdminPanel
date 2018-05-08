import { ScholarshipsChild } from './ScholarshipsChild';
import { NewScholarship } from './NewScholarship';
import { DeleteButton } from './buttons/DeleteButton';
import { DoubleHR } from './horizontalruler/DoubleHR';
import { endpoint } from '../config';
import React from 'react';

export class Scholarships extends React.Component {
  constructor(props) {
    super(props)
    this.state = ({scholarships: this.props.scholarships})
    this.updateScholarships = this.updateScholarships.bind(this);
  }
  updateScholarships() {
    fetch(endpoint + '/scholarships/')
      .then(res => res.json())
      .then(scholarships => this.setState({scholarships: scholarships.data.scholarships}))
  }
  render() {
    return (
      <div className='col-md-6'>
        <div className='well pull-right' style={{backgroundColor: '#0d47a1', width: '80%'}}>
          <div style={{fontFamily: 'Lobster, sans-serif', marginBottom: 10}}>
            <h1 style={{color: 'white'}}>Scholarships</h1>
          </div>
          <NewScholarship updateApp={this.props.updateApp} updateScholarships={this.updateScholarships}/>
          <DoubleHR />
          {this.props.scholarships.map(scholarship => {
            return (
              <div>
              <div className='row'>
                <div className='col-md-10 col-md-offset-1'>
                  <ScholarshipsChild
                    scholarship={scholarship}
                    updateApp={this.props.updateApp}
                    updateScholarships={this.updateScholarships}/>
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
