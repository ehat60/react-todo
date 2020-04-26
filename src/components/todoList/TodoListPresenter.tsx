import { TodoListModel } from "./todoListModel";
import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { CheckboxFormGroup } from "../common/CheckboxFormGroup";
import Form from "react-bootstrap/Form";

interface TodoListProps {
    todoList: TodoListModel;
    onItemToggle: (itemId: string) => void;
    onNewItemNameChanged: (name: string) => void;
}

function TodoListPresenter(props: TodoListProps) {

    const items = props.todoList.items.map((item, i) => (
        <ListGroup.Item key={i}>
            <CheckboxFormGroup label={item.name} checked={item.checked} onChange={_ => props.onItemToggle(item.id)} />
        </ListGroup.Item>
    ));

    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Header>{props.todoList.name}</Card.Header>
                <ListGroup variant="flush">

                    {items}
                </ListGroup>
                <ListGroup variant="flush">
                    <ListGroup.Item >
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Add new item</Form.Label>
                            <Form.Control type="text" placeholder="Enter name" onChange={(e: any) => props.onNewItemNameChanged(e.target.value)} />
                        </Form.Group>
                    </ListGroup.Item>

                </ListGroup>
            </Card>
        </div>

    );
}

export default TodoListPresenter