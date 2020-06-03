import React, { Component , Fragment} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {get_bugs, delete_bug} from  '../actions/BugsActions';

export class Bugs extends Component {

    static propTypes={
        bugs:PropTypes.array.isRequired,
        get_bugs:PropTypes.func.isRequired,
        delete_bug:PropTypes.func.isRequired,

    }

    componentDidMount() {
        this.props.get_bugs();
    }

    render() {
        return (
           <Fragment>
               <h2>Bugs</h2>
               <table className="table table-striped" >
                    <thead className="">
                        <tr>
                            <th>title</th>
                            <th>id</th>
                            <th>description</th>
                            <th>resolved</th>
                            <th/>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.bugs.map(bug=>(
                            <tr key={bug.id}>
                                <td>{bug.title}</td>
                                <td>{bug.id}</td>
                                <td>{bug.description}</td>
                                <td><input type="checkbox" value={bug.resolved}/></td>
                                <td><button onClick={this.props.delete_bug.bind(this,bug.id)} className="btn btn-outline-danger btn-sm">Delete</button></td>
                            </tr>
                        ))}
                    </tbody>
               </table>
           </Fragment>
        ) 
    }
}

const mapStateToProps=state=>({
    bugs:state.bugsReducer.bugs
})

export default connect(mapStateToProps, {get_bugs, delete_bug})(Bugs);
