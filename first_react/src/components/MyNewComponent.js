import React, {Component} from 'react';

class MyNewComponent extends Component{
    render() {
        return <>
            {this.props.someText}
        </>
    }
}
export default MyNewComponent;