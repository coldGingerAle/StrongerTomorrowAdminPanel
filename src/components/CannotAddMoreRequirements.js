import React from 'react';
import { Button, Modal} from 'react-bootstrap';

export class CannotAddMoreRequirements extends React.Component {

  constructor(props) {
    super(props);
    this.close = this.close.bind(this);
    this.open = this.open.bind(this);
    this.state = ({
      showModal: false
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

        <button onClick={this.open} style={{fontFamily: 'Raleway'}}
          className="badge"
          style={{
            textShadow: '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000',
            marginBottom: 10,
            backgroundColor:'#5cb85c',
          }}>
          <strong style={{fontSize: 15}}><i className="fa fa-plus" aria-hidden="true"></i> Add Requirement</strong>
        </button>

        <Modal show={this.state.showModal} bsSize='medium' onHide={this.close} style={{maxHeight: 'calc(100vh)', overflowY: 'auto'}}>
          <Modal.Header className='text-center' closeButton style={{backgroundColor: '#145ACC', marginBottom: -18}}>
            <Modal.Title className='text-center'>
              <h1 style={{color: 'white', fontFamily: 'Raleway', fontWeight: 'bold', textShadow: '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000'}}>
                {this.props.scholarship.name} GrandChild
              </h1>
            </Modal.Title>
            <h3 style={{textShadow: '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000', color: '#EC971F'}}
              className='text-center'
              >
              Adding Requirement
            </h3>
          </Modal.Header>
          <Modal.Body className='text-center'>
            <h2 style={{textShadow: '-1px -1px 0 #145ACC, 1px -1px 0 #145ACC, -1px 1px 0 #145ACC, 1px 1px 0 #145ACC', color: 'white'}}>
              No Available Requirements to Add!
            </h2>
            <hr/>
            <button className='badge'
              onClick={this.close}
              style={{textShadow: '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000', fontSize: 20, backgroundColor: '#63BCF2'}}>
              <i className="fa fa-thumbs-up" aria-hidden="true"></i> OK
            </button>
          </Modal.Body>
        </Modal>
        </span>

    );
  }
}
