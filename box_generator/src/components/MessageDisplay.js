import React, { useState } from 'react';

const MessageDisplay = (props) => {
    const container = {
        display: 'flex',
        margin: '10px',
    };

    return (

        <div style={container}>
            {
                props.message.map((item, i) => {
                    const divStyle = {
                        width: '130px',
                        height: '130px',
                        margin: '10px',
                        background: item,
                    };
                    return <div id={i} key={i} style={divStyle}></div>
                })
            }
        </div>
    );
}

export default MessageDisplay;