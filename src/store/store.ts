export class Store {
  private subscribers: Array<() => { [key: string]: any }>;
  private reducers: {
    [key: string]: (state, action) => { [key: string]: any };
  };
  private state: { [key: string]: any };

  constructor(reducers = {}, initialState = {}) {
    this.reducers = reducers;
    this.state = this.reduce(initialState, {});
  }

  get value() {
    return this.state;
  }

  public dispatch(action) {
    this.state = this.reduce(this.state, action);
  }

  private reduce(state, action) {
    const newState = {};
    for (const prop in this.reducers) {
      if (prop) {
        newState[prop] = this.reducers[prop](state[prop], action);
      }
    }
    return newState;
  }
}
