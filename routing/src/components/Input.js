
const Input = (props)=>{
    return(

        isNaN(props.var)?<h1>The World is: {props.var}</h1>:<h1>The Number is: {props.var}</h1>

    );
}
export default Input;