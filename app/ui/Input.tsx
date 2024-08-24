"use client";

import {useState} from 'react'

type Props = {
    type: 'text' | 'password'
    name: string
    formTitle: string,
    required: boolean,
}

export const Input = (props:Props) => {

	const [value, setValue] = useState('');

    const changeValue = (event: React.ChangeEvent<HTMLInputElement>) => {
        if(!event) {return}
        setValue(event.target.value)
    }

	return (
		<div>
            <span>{props.formTitle}</span>
            <div>
                <input
                    type={props.type}
                    name={props.name}
                    value={value}
                    onChange={changeValue}
                />
            </div>
        </div>
	);
}
