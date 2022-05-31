import React from "react";

export default function Select(props){
    return (
        <select id={props.name} name={props.name}>
            { props.content.map( contentline => {
                    return <option value={contentline.value}> {contentline.text} </option>;
                }) 
            }
        </select>
    );
}