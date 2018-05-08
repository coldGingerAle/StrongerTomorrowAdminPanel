import React from 'react';
import { Button, Modal} from 'react-bootstrap';
import { Requirements } from './Requirements';
import { EditModalNewValues } from './EditModalNewValues';
import { endpoint } from '../config';
import { EditModalCurrentValues } from './EditModalCurrentValues';

export class EditModal extends React.Component {

  constructor(props) {
    super(props);
    this.close = this.close.bind(this);
    this.open = this.open.bind(this);
    this.comparison = this.comparison.bind(this);
  }

  comparison(val) {
    if (val === 1) return "Greater than or equal to";
    else if (val === 0) return "Exactly equal to";
    else if (val == -1 ) return "Less than or equal to";
    else return "Don't Care!";
  }

  state = ({
    showModal: false,
  })

  close() {
    this.setState({ showModal: false });
  }

  open() {
    this.setState({ showModal: true });
  }

  render() {
    return (
        <span>

        <button onClick={this.open} className='pull-right badge' style={{backgroundColor: 'green'}}><i className="fa fa-pencil-square-o" aria-hidden="true"></i> Edit</button>

        <Modal show={this.state.showModal} bsSize='medium' onHide={this.close} style={{maxHeight: 'calc(100vh)', overflowY: 'auto'}}>
          <Modal.Header className='text-center' closeButton style={{backgroundColor: '#145ACC', marginBottom: 0}}>
            <Modal.Title className='text-center' style={{height: 130}}>
              <h1 style={{color: 'white', fontFamily: 'Raleway', fontWeight: 'bold', textShadow: '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000'}}>
                {this.props.scholarship.name}
              </h1>
              <h3 style={{textShadow: '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000', color: 'orange', marginTop: 30}}
                className='text-center'
                >
                Editing Requirement Value
              </h3>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className='container-fluid' style={{marginTop: -10}}>
            <h1 style={{textShadow: '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000', color: 'yellow', marginTop: 10}}
              className='text-center'
              >
              Current Values
            </h1>
            <EditModalCurrentValues scholarship={this.props.scholarship} requirement={this.props.requirement}/>
            <hr style={{borderTop: '3px double #8c8b8b', marginTop: 20, marginBottom: 15}}/>
            <h1 style={{textShadow: '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000', color: '#30C3F7', marginTop: 0}}
              className='text-center'
              >
              Change
            </h1>
            <div className='row'>
              <div className='col-md-12'>
                  <EditModalNewValues closeParent={this.close} requirement={this.props.scholarship} scholarship={this.props.requirement} updateApp={this.props.updateApp}/>
              </div>
            </div>
            </div>
          </Modal.Body>
        </Modal>
        </span>
    );
  }
}
