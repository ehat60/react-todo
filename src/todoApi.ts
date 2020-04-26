import { TodoListModel } from "./components/todoList/todoListModel";


const baseUrl = "http://localhost:5000/";

export async function getTodoLists(): Promise<Array<TodoListModel>> {
    return get<Array<TodoListModel>>("todolist");
}

export async function toggleTodoItem(id: string) {
    await fetch(baseUrl + "todoItem/" + id + "/toggle", {method: "POST"});
}

export async function addTodoItem(listId: string, name: string) {
    const body = {
        name: name
    };
    await fetch(baseUrl + "todoList/" + listId + "/addItem", {method: "POST", body: JSON.stringify(body)});
}

async function get<T>(url: string): Promise<T> {
    const response = await fetch(baseUrl + url);
    const json = await response.json();
    return json;
}