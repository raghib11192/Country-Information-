import React, { Component } from 'react';

class Flag extends Component {

    render() {
        return (
            <div>
                <img className="responsive" src={process.env.PUBLIC_URL + `/image/${this.props.name}.jpg`}  width="700" height="400"/>
            </div>
        );
    }
}

export default Flag;