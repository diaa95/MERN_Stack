import React,{Component} from 'react';

class MyComponent extends Component{

    constructor(props, context) {
        super(props, context);
        this.state = {
            age : this.props.age
        }
    }

    birthDay = () => {
        let prevAge = this.state.age;
        prevAge += 1;
        console.log(prevAge);
        return this.setState({age: prevAge});
    }

    render() {
        const {firstName, lastName, hairColor} = this.props;
        return(
            <>
                <h2>{firstName}, {lastName}</h2>
                <p>Age: {this.state.age}</p>
                <p>Hair Color: {hairColor}</p>
                <button onClick={ () =>  this.birthDay() }>Birthday Button for {this.props.firstName} </button>
            </>
    )
    }
}
export default MyComponent;