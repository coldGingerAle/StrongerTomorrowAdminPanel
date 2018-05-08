import React from 'react';
import { Button, Modal} from 'react-bootstrap';
import { Requirements } from './Requirements';
import { ScholarshipInfo } from './ScholarshipInfo';
import { DeleteButton } from './buttons/DeleteButton';
import { endpoint } from '../config';

export class RequirementsChild extends React.Component {

  constructor(props) {
    super(props);
    this.close = this.close.bind(this);
    this.open = this.open.bind(this);
    this.delete = this.delete.bind(this);
  }

  state = ({
    showModal: false,
  })

  delete() {
    var self = this;
    fetch(endpoint + '/requirements/' + this.props.requirement.id, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify ({
        message: 'Scholarship successfully deleted.'
      })
    }).then(() => {
      self.props.updateApp();
      self.close();
      })
  }

  close() {
    this.setState({ showModal: false });
  }

  open() {
    this.setState({ showModal: true });
  }

  render() {
    return (
        <span>

        <button style={{fontFamily: 'Raleway'}}
          onClick={this.open}
          className="badge btn-block"
          style={{
            textShadow: '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000',
            backgroundColor: '#1DF754',
            fontSize: 18,
            outline: 'none'
          }}>
          <strong>{this.props.requirement.name}</strong>
        </button>

        <Modal show={this.state.showModal} bsSize='large' onHide={this.close} style={{maxHeight: 'calc(100vh)', overflowY: 'auto'}}>
          <Modal.Header className='text-center' closeButton style={{backgroundColor: '#20AA2A', marginBottom: 0}}>
            <Modal.Title className='text-center'>
              <h1 style={{color: 'white', fontFamily: 'Raleway', fontWeight: 'bold', textShadow: '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000'}}>
                {this.props.requirement.name}
              </h1>
            </Modal.Title>
            <DeleteButton text='Requirement' onClick={this.delete}/>
          </Modal.Header>
          <Modal.Body>
            <div className='container-fluid' style={{marginTop: -10}}>
            <div className='row'>
              <div className='col-md-12'>
                <div className='well container-fluid' style={{fontFamily: 'Raleway', fontWeight: 'bold', marginBottom: 10, border: '1px solid black'}}>
                  <div className='well col-md-6 text-center' style={{marginBottom: 3}}>
                    <span className='badge' style={{backgroundColor: 'orange', marginRight: 10}}>
                      Description
                    </span>
                    <span>{this.props.requirement.description}</span>
                  </div>
                  <div className='well col-md-6 text-center' style={{marginBottom: 3}}>
                    <span className='badge' style={{backgroundColor: '#0091ea', marginRight: 10}}>
                      Data Type
                    </span>
                      {this.props.requirement.type}
                  </div>
                </div>
              </div>
            </div>
            <hr style={{borderTop: '3px double #8c8b8b', marginTop: 0, marginBottom: 10}}/>
            <h3 style={{textShadow: '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000', color: 'orange', marginTop: 0}}
              className='text-center'
              >
              Associated Scholarships
            </h3>
            <div className='row'>
              <div className='col-md-12'>
                {this.props.requirement.scholarships.map(scholarship => {
                  return <ScholarshipInfo updateApp={this.props.updateApp} scholarship={scholarship} requirement={this.props.requirement}/>
                })}
                <hr/>
                <button className='badge pull-right' style={{marginLeft:'5px', backgroundColor: '#D9534F'}} onClick={this.close}>
                  <span
                  style={{
                    textShadow: '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000',
                    marginBottom: 10,
                    fontSize: 15
                  }}>
                    Cancel
                  </span>
                </button>
              </div>
            </div>
            </div>
          </Modal.Body>
        </Modal>
        </span>
    );
  }
}
