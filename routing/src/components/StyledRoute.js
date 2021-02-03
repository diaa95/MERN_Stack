const StyledRoute = (props)=>{
    const css={
        color: props.color1,
        background: props.color2
    }
    return(

        isNaN(props.var)?<h1 style={css}>The World is: {props.var}</h1>:<h1>this is not a word</h1>

    );
}
export default StyledRoute;