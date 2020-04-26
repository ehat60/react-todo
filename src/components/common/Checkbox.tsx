import * as React from 'react';
import Form from 'react-bootstrap/Form';
import { newId } from './newId';

export interface ICheckboxProps {
    label: string;
    checked: boolean;
    onChange: (checked: boolean) => void;
}

export function Checkbox(props: ICheckboxProps) {
    return (
        <Form.Check
            id={newId()}
            type="checkbox"
            label={props.label}
            checked={props.checked}
            onChange={(e: any) => props.onChange(e.target.checked)}
        />
    );
}
