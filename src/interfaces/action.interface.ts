interface IAction<T, P> {
    type: T;
    payload: P;
}

export default IAction;