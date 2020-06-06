import React, { Component } from 'react'
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {add_bug} from'../actions/BugsActions';


export class AddBugs extends Component {

    state={
        title:'',
        description: '',
        
    }
    static propTypes={
        add_bug: PropTypes.func.isRequired
    }
    onChange=event=>this.setState(
        { [event.target.name]:event.target.value });
    
    onSubmit=e=>{
        e.preventDefault();
        const {title, description}=this.state;
        const bug ={title, description};
        this.props.add_bug(bug);
    }
    render() {
        const { title, description }=this.state;
        return (
            <div className="col-md-6 m-auto">
            <div className="card card-body mt-5">
                <form onSubmit={this.onSubmit}>
                        <legend>Add Bug</legend>
                        <div className="form-group">
                            <label >title</label>
                            <input type="text" name="title" onChange={this.onChange} value={title}
                            className="form-control" placeholder="bug title"/>
                        </div>
                        <div className="form-group">
                            <label >Description</label>
                            <textarea onChange={this.onChange} value={description} name="description" className="form-control"  rows="3" />
                            <button className="btn btn-outline-primary mt-4" type="submit">Submit</button>
                        </div>
                </form>
             </div>
            </div>
        )
    }
}

export default connect(null, {add_bug})(AddBugs);
