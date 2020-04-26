import { TodoListModel } from "./components/todoList/todoListModel";


const baseUrl = "http://localhost:5000/";

export async function getTodoLists(): Promise<Array<TodoListModel>> {
    return get<Array<TodoListModel>>("todolist");
}

export async function toggleTodoItem(id: string) {
    await fetch(baseUrl + "todoItem/" + id + "/toggle", { method: "POST" });
}

export async function addTodoItem(listId: string, name: string): Promise<{}> {
    const body = {
        name: name
    };
    return await post("todoList/" + listId + "/addItem", body);
}

export async function addTodoList(name: string): Promise<{}> {
    const body = {
        name: name
    };
    return await post("todoList", body);
}

async function post(url: string, body: any): Promise<{}> {
    const requestHeaders: HeadersInit = new Headers();
    requestHeaders.set('Content-Type', 'application/json');
    return await fetch(baseUrl + url, { method: "POST", body: JSON.stringify(body), headers: requestHeaders });
}

async function get<T>(url: string): Promise<T> {
    const response = await fetch(baseUrl + url);
    const json = await response.json();
    return json;
}