import React, { Component } from 'react';
class StudentTable extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
                <table className="table">
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Phone Number</th>
                    </tr>
                </thead>
                <tbody>
                    
                </tbody>
                </table>
            </React.Fragment>
         );
    }
}
 
export default StudentTable;