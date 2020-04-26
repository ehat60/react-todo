export interface TodoListModel {
    id: string;
    name: string;
    items: Array<TodoItemModel>;
}

export interface TodoItemModel {
    id: string;
    name: string;
    checked: boolean;
}