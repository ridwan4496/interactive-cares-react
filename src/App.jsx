import { useReducer } from "react";
import "./App.css";

const counterReducer = (state, action) => {
  switch (action.type) {
    case "ADD": {
      return state + action.payload;
    }
    case "SUBTRACT": {
      return state - action.payload;
    }
    default: {
      return state;
    }
  }
};

const themeReducer = (state, action) => {
  switch (action.type) {
    case "BACKGROUND": {
      return {
        ...state,
        bgColor: action.payload,
      };
    }
    case "TEXT": {
      return {
        ...state,
        textColor: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

const initStateColor = { bgColor: "#fff", textColor: "#000" };

const App = () => {
  const [counter, dispatchCounterAction] = useReducer(counterReducer, 100);
  const [theme, dispatchThemeAction] = useReducer(themeReducer, initStateColor);

  return (
    <div
      className="app"
      style={{
        backgroundColor: theme.bgColor,
        color: theme.textColor,
      }}
    >
      <div className="show-data">
        <h2>The number is {counter}</h2>
        <div>
          <button
            className="btn btn-success m-2"
            onClick={() => {
              dispatchCounterAction({ type: "ADD", payload: 1 });
            }}
          >
            Increase by 1
          </button>
          <button
            className="btn btn-danger m-2"
            onClick={() => {
              dispatchCounterAction({ type: "SUBTRACT", payload: 1 });
            }}
          >
            Decrease by 1
          </button>
          <button
            className="btn btn-success m-2"
            onClick={() => {
              dispatchCounterAction({ type: "ADD", payload: 2 });
            }}
          >
            Increase by 2
          </button>
          <button
            className="btn btn-danger m-2"
            onClick={() => {
              dispatchCounterAction({ type: "SUBTRACT", payload: 2 });
            }}
          >
            Decrease by 2
          </button>
          <button
            className="btn btn-success m-2"
            onClick={() => {
              dispatchCounterAction({ type: "ADD", payload: 3 });
            }}
          >
            Increase by 3
          </button>
          <button
            className="btn btn-danger m-2"
            onClick={() => {
              dispatchCounterAction({ type: "SUBTRACT", payload: 3 });
            }}
          >
            Decrease by 3
          </button>
        </div>
      </div>
      <div className="background-change">
        <button
          className="btn btn-dark m-2"
          onClick={() =>
            dispatchThemeAction({ type: "BACKGROUND", payload: "#000" })
          }
        >
          Dark Background
        </button>
        <button
          className="btn btn-light m-2"
          onClick={() =>
            dispatchThemeAction({ type: "BACKGROUND", payload: "#fff" })
          }
        >
          Light Background
        </button>
        <button
          className="btn btn-warning m-2"
          onClick={() =>
            dispatchThemeAction({ type: "BACKGROUND", payload: "yellow" })
          }
        >
          Warning Background
        </button>
        <button
          className="btn btn-light m-2"
          onClick={() => dispatchThemeAction({ type: "TEXT", payload: "#FFF" })}
        >
          White Text
        </button>
        <button
          className="btn btn-dark m-2"
          onClick={() => dispatchThemeAction({ type: "TEXT", payload: "#000" })}
        >
          Black Text
        </button>
        <button
          className="btn btn-danger m-2"
          onClick={() => dispatchThemeAction({ type: "TEXT", payload: "red" })}
        >
          Red Text
        </button>
      </div>
    </div>
  );
};

export default App;
