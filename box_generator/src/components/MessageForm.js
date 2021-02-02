import React, { useState } from 'react';


const MessageForm = (props) => {
    const [msg, setMsg] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        // addDiv(msg);
        props.onNewMessage( msg );
        setMsg("");
    };

    return (
        <form onSubmit={ handleSubmit }>
            <h1>Set Message</h1>
            <input
                placeholder="color"
                onChange={ (e) => setMsg(e.target.value) }
                value={ msg }
            />
            <input type="submit" value="Send Message" />
        </form>
    );
};

export default MessageForm;