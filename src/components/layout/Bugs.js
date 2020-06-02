import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {get_bugs} from  '../../actions/getBugs';

export class Bugs extends Component {

    static propTypes={
        bugs:PropTypes.array.isRequired
    }
    render() {
        return (
            <div>
                <h1>Bugs List</h1>
            </div>
        ) 
    }
}

const mapStateToProps=state=>({
    bugs:state.bugsReducer.bugs
})

export default connect(mapStateToProps)(Bugs);
