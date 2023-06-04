import React, { Component } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
class NewStudent extends Component {

    handleNewStudent =()=>{
        
    }
    render() {
        console.log(this.props); 
        return ( 
            
            <React.Fragment>
                <Modal isOpen={this.props.onAddStudent}>
                    <ModalHeader>
                        New Student
                    </ModalHeader>
                    <ModalBody>
                        <form onSubmit={this.handleNewStudent}>
                            <div className="form-group">
                                <label>first Name:</label>
                                <input className="form-control" type="text" name="firstName" />
                            </div>

                            <div className="form-group">
                                <label>Last Name:</label>
                                <input className="form-control" type="text" name="lastName" />
                            </div>

                            <div className="form-group">
                                <label>Email:</label>
                                <input className="form-control" type="text" name="email" />
                            </div>

                            <div className="form-group">
                                <label>Phone Number:</label>
                                <input className="form-control" type="text" name="phone" />
                            </div>
                            <div className="form-group">
                                <button type="submit" className="btn btn-primary mr-3">Add Student</button>
                                <button type="button" className="btn btn-danger" onClick={this.props.onModalExit}>Exit</button>
                            </div>
                        </form>

                    </ModalBody>
                    <ModalFooter></ModalFooter>
                </Modal>
            </React.Fragment>
         );
    }
}
 
export default NewStudent;