import React, { Component } from 'react'

export class AddBugs extends Component {
    render() {
        return (
            <form method="post" action="/">
                <label>Add Bugs</label>
                <fieldset>
                    <div className="form-group col-sm-6 col">
                        <input type="text" placeholder="bug title"/>
                       
                    </div>
                     
                </fieldset>
               
            </form>
        )
    }
}

export default AddBugs;