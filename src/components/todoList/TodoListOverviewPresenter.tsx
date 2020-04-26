import * as React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { TodoListModel } from './todoListModel';
import TodoListPresenter from './TodoListPresenter';
import styles from './TodoListOverviewPresenter.module.css';

export interface ITodoListOverviewPresenterProps {
    todoLists: Array<TodoListModel>;
    newTodoListName: string;
    onItemToggle: (itemId: string) => void;
    onNewItemNameChanged: (listId: string, name: string) => void;
    onAddNewTodoList: () => void;
    onNewTodoListNameChanged: (name: string) => void;
}

export function TodoListOverviewPresenter(props: ITodoListOverviewPresenterProps) {
    return (
        <Container>
            <div className={styles.header}>
                <Form.Control 
                    type="text" 
                    placeholder="New todo list name" 
                    className="form-control-lg" 
                    onChange={(e: any) => props.onNewTodoListNameChanged(e.target.value)} 
                    value={props.newTodoListName}
                />
                <Button variant="primary" size="lg" className={styles.addButton} onClick={props.onAddNewTodoList}>
                    Add
                </Button>
            </div>
            <Row>
                {props.todoLists.map(t => (
                    <Col md={6} key={t.id} className={styles.card}>
                        <TodoListPresenter
                            todoList={t}
                            onItemToggle={props.onItemToggle}
                            onNewItemNameChanged={props.onNewItemNameChanged}
                        />
                    </Col>
                ))}
            </Row>
        </Container>
    );
}
