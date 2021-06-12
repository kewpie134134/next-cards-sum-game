import React from 'react';

interface StateProps {
  count: number;
}

interface ActionProps {
  type: string;
}

interface StoreContextProps {
  state: StateProps;
  dispatch: ({ type: ActionProps }) => void;
}

// アクションタイプ
const ActionTypes = {
  increment: 'increment',
  decrement: 'decrement',
};

// State の初期値
const initialState: { count: number } = { count: 0 };

// Reducer 処理部分
const reducer = (state: StateProps, action: ActionProps) => {
  switch (action.type) {
    case ActionTypes.increment:
      return { count: state.count + 1 };
    case ActionTypes.decrement:
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
};

// ストアコンテクスト生成
const StoreContext = React.createContext({} as StoreContextProps);

const App: React.FC = () => {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      <AppScreen />
    </StoreContext.Provider>
  );
};

const AppScreen: React.FC = () => {
  const { state, dispatch } = React.useContext(StoreContext);

  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({ type: ActionTypes.decrement })}>
        -
      </button>
      <button onClick={() => dispatch({ type: ActionTypes.increment })}>
        +
      </button>
    </>
  );
};

export default App;
