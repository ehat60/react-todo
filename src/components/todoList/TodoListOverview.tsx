import * as React from 'react';
import { getTodoLists, toggleTodoItem, addTodoItem, addTodoList } from '../../todoApi';
import { TodoListModel } from './todoListModel';
import { TodoListOverviewPresenter } from './TodoListOverviewPresenter';

export interface ITodoListOverviewProps {    
}

export interface ITodoListOverviewState {
    todoLists: Array<TodoListModel>;
    newNames: Array<[string, string]>;
    newTodoListName: string;
}

export default class TodoListOverview extends React.Component<ITodoListOverviewProps, ITodoListOverviewState> {
    constructor(props: ITodoListOverviewProps) {
        super(props);

        this.state = {
            todoLists: [],
            newNames: [],
            newTodoListName: ""
        }
    }

    async componentDidMount() {
        await this.loadLists();
    }

    public render() {

        return (
            <TodoListOverviewPresenter
                todoLists={this.state.todoLists}
                newTodoListName={this.state.newTodoListName}
                onItemToggle={id => {
                    const lists = this.state.todoLists;
                    let list = lists.filter(t => t.items.some(i => i.id === id))[0]
                    let item = list.items.filter(i => i.id === id)[0];
                    item.checked = !item.checked;
                    this.setState({ todoLists: lists })

                    toggleTodoItem(id);
                }}
                onNewItemNameChanged={async (listId, name) => {
                    await addTodoItem(listId, name);
                    this.loadLists();
                }}
                onNewTodoListNameChanged={name => {
                    this.setState({newTodoListName: name});
                }}
                onAddNewTodoList={async () => {
                    await addTodoList(this.state.newTodoListName);
                    this.loadLists();
                }}
            />
        );
    }

    changeList(id: string, changeFunc: (list: TodoListModel) => void) {
        const lists = this.state.todoLists;
        let list = lists.filter(t => t.items.some(i => i.id === id))[0]
        let item = list.items.filter(i => i.id === id)[0];
        item.checked = !item.checked;
        this.setState({ todoLists: lists })
    }

    private async loadLists() {
        const lists = await getTodoLists();
        this.setState({ todoLists: lists });
    }
}
