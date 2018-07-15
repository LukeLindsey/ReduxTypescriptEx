export interface IState {
  count: number;
}

const initialState = {
  count: 1
}
​
function demo(state: IState) {
  if (typeof state === 'undefined') {
    return initialState
  }
​
  return state
}

export default demo;