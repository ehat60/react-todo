import * as React from 'react';
import { getTodoLists, toggleTodoItem } from '../../todoApi';
import { TodoListModel } from './todoListModel';
import TodoListPresenter from './TodoListPresenter';

export interface ITodoListOverviewProps {
}

export interface ITodoListOverviewState {
    todoLists: Array<TodoListModel>;    
}

export default class TodoListOverview extends React.Component<ITodoListOverviewProps, ITodoListOverviewState> {
    constructor(props: ITodoListOverviewProps) {
        super(props);

        this.state = {
            todoLists: []
        }
    }

    async componentDidMount() {
        const lists = await getTodoLists();
        this.setState({ todoLists: lists });
    }

    public render() {
        if (this.state.todoLists.length === 0) {
            return <div>Spinner her</div>
        }
        return (
            <div>
                {this.state.todoLists.map(t => (
                    <TodoListPresenter
                        todoList={t}
                        key={t.id}
                        onItemToggle={id => {
                            const lists = this.state.todoLists;
                            let list = lists.filter(t => t.items.some(i => i.id === id))[0]
                            let item = list.items.filter(i => i.id === id)[0];
                            item.checked = !item.checked;
                            this.setState({ todoLists: lists })

                            toggleTodoItem(id);
                        }}
                        onNewItemNameChanged={newName => {
                            
                        }} 
                    />
                ))}
            </div>
        );
    }
}
