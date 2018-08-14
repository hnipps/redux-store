// Action constants
export const ADD_TODO = "[TODO] Add Todo";
export const REMOVE_TODO = "[TODO] Remove Todo";

// Actions creators
export class AddTodo {
  public readonly type = ADD_TODO;

  constructor(private payload: any) {}
}

export class RemoveTodo {
  public readonly type = REMOVE_TODO;

  constructor(private payload: any) {}
}
