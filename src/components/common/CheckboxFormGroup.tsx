import * as React from 'react';
import Form from 'react-bootstrap/Form';
import { newId } from './newId';

export interface ICheckboxFormGroupProps {
    label: string;
    checked: boolean;
    onChange: (checked: boolean) => void;
}

export function CheckboxFormGroup(props: ICheckboxFormGroupProps) {
    return (
        <Form.Group controlId={newId()}>
            <Form.Check
                type="checkbox"
                label={props.label}
                checked={props.checked}
                onChange={(e: any) => props.onChange(e.target.checked)}
            />
        </Form.Group>
    );
}
