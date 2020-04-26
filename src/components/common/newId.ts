let lastId = 0;

export function newId() {
    lastId++;
    return lastId.toString();
}