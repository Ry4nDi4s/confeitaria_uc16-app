'use client';

import { useState } from "react";

type Props ={
    label: string;
    type: "text" | "email" ;
    multiline?: boolean;
    onChange?(texto: string): void; 
    text?: string
}

export default function Textfield(props: Props){
    const [texto, setTexto] = useState(props.text)
    function handleChange(e: React.ChangeEvent<HTMLInputElement>){
        setTexto(e.target.value);
        if (props.onChange){
            props.onChange(e.target.value);
        }
    };
    function handleTextAreaChange(e: React.ChangeEvent<HTMLTextAreaElement>){
        setTexto(e.target.value);
        if (props.onChange){
            props.onChange(e.target.value);
        }
    };

    return(
    <>
    <label className="label">
        {props.label}:
        {(props.multiline)?(<textarea onChange={handleTextAreaChange} placeholder={props.label} value={texto}/>):(<input type={props.type} placeholder={props.label} value={texto} onChange={handleChange}/>)}
    {texto}
    </label>
    </>
   );
};