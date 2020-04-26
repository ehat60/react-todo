import { TodoListModel } from "./todoListModel";
import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Checkbox } from "../common/Checkbox";
import Form from "react-bootstrap/Form";

interface TodoListProps {
    todoList: TodoListModel;
    onItemToggle: (itemId: string) => void;
    onNewItemNameChanged: (listId: string, name: string) => void;
}

function TodoListPresenter(props: TodoListProps) {
    const items = props.todoList.items.map((item, i) => (
        <ListGroup.Item key={i}>
            <Checkbox label={item.name} checked={item.checked} onChange={_ => props.onItemToggle(item.id)} />
        </ListGroup.Item>
    ));

    return (
        <div>
            <Card>
                <Card.Header>{props.todoList.name}</Card.Header>
                <ListGroup variant="flush">
                    {items}
                </ListGroup>
                <ListGroup variant="flush">
                    <ListGroup.Item >
                        <Form.Control
                            type="text"
                            placeholder="Add item"
                            onKeyPress={(e: any) => {
                                if (e.key === "Enter") {
                                    props.onNewItemNameChanged(props.todoList.id, e.target.value);
                                }
                            }}
                        />
                    </ListGroup.Item>
                </ListGroup>
            </Card>
        </div>
    );
}

export default TodoListPresenter