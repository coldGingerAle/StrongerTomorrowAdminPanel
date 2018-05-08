import React from 'react';
import { Button, Modal} from 'react-bootstrap';
import { RequirementForm } from './RequirementForm';
import { DropDown } from './DropDown';
import { endpoint } from '../config';

export class NewScholarship extends React.Component {

  constructor(props) {
    super(props);
    this.close = this.close.bind(this);
    this.open = this.open.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  state = ({
    showModal: false,
    requirements: [],
    scholarshipName: 'Scholarship Name'
  })

  close() {
    this.setState({ showModal: false });
  }

  open() {
    this.setState({ showModal: true });
  }

  handleInput(e) {
    this.setState({scholarshipName: e.target.value})
  }

  handleSubmit() {
    var self = this;
    fetch(endpoint + '/scholarships/', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify ({
        name: self.state.scholarshipName
      })
    }).then(() => {
        self.setState({scholarshipName: 'Scholarship Name'})
        self.props.updateApp();
        self.props.updateScholarships();
        self.close();
      })
  }

  render() {
    return (

        <span>
        <button onClick={this.open} style={{fontFamily: 'Raleway'}}
          className="badge"
          style={{
            textShadow: '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000',
            marginBottom: 10,
            outline: 'none'
          }}>
          <strong style={{fontSize: 15}}><i className="fa fa-plus" aria-hidden="true"></i> New Scholarship</strong>
        </button>

        <Modal show={this.state.showModal} bsSize='medium' onHide={this.close} style={{maxHeight: 'calc(100vh)', overflowY: 'auto'}}>
          <Modal.Header className='text-center' closeButton style={{backgroundColor: '#145ACC', marginBottom: -18}}>
            <Modal.Title className='text-center'><h1 style={{color: 'white', fontFamily: 'Raleway', fontWeight: 'bold', textShadow: '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000'}}>New Scholarship</h1></Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className='container-fluid form-group' style={{marginTop: 20}}>
            <div className='row'>
              <form className='col-md-12 text-center'>
                <div className="row">
                  <label for="usr">
                    <h3 style={{textShadow: '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000', color: 'yellow'}}                    >
                      Scholarship Name
                    </h3>
                  </label>
                </div>

                <div className='col-md-8 col-md-offset-2'>
                  <input type="text" onChange={this.handleInput}
                    style={{fontFamily: 'Raleway, sans-serif'}}
                    className="form-control"
                    id="usr"
                    value={this.state.scholarshipName}
                    placeholder={this.state.scholarshipName}/>
                </div>
              </form>
            </div>
            <div className='row' style={{marginTop: 5, marginBottom: 0}}>
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
              <button className='badge pull-right' style={{backgroundColor: '#5CB85C'}} onClick={this.handleSubmit}>
              <span
              style={{
                textShadow: '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000',
                marginBottom: 10,
                fontSize: 15
              }}>
                  <i className="fa fa-pencil" aria-hidden="true"></i> Create Scholarship
                </span>
              </button>
            </div>
            </div>
          </Modal.Body>
        </Modal>
        </span>
    );
  }
}
