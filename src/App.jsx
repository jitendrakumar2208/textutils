import Navbar from "./components/navbar/Navbar";
import "./App.css";
import { useReducer } from "react";
const initialState = {
  text: "",
  numOfWords: 0,
  numOfChar: 0,
  readTime: 0,
};
function App() {
  const reducer = (state, action) => {
    switch (action.type) {
      case "UPDATE-TEXT":
        const numOfWordsintext = action.payload
          .split(" ")
          .filter((word) => word.trim().length).length;
        return {
          ...state,
          numOfWords: numOfWordsintext,
          numOfChar: action.payload.length,
          readTime: 0.08 * numOfWordsintext,
          text: action.payload,
        };
      case "CONVERT_UPPERCASE":
        return { ...state, text: state.text.toUpperCase() };
      case "CONVERT_LOWERCASE":
        return { ...state, text: state.text.toLowerCase() };
      case "CLEAR_TEXT":
        return initialState;
      case "REMOVE_EXTRA_SPACES":
        return { ...state, text: state.text.replace(/\s+/g, " ").trim() };
      case "COPY":
        let text = state.text;
        navigator.clipboard.writeText(text);
        return { ...state };
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state.text, state.numOfWords);
  return (
    <div>
      <Navbar />
      <div className="utils">
        <h2>TextUtis - Word Counter, Charecter Counter, Remove Extra Space</h2>
        <div className="textnotes">
          <textarea
            name=""
            id=""
            rows={10}
            cols={80}
            placeholder="please enter text"
            value={state.text}
            onChange={(e) =>
              dispatch({ type: "UPDATE-TEXT", payload: e.target.value })
            }
          ></textarea>
        </div>
        <div className="buttons">
          <button
            className="btn"
            onClick={() => dispatch({ type: "CONVERT_UPPERCASE" })}
          >
            Convert Uppercase
          </button>
          <button
            className="btn"
            onClick={() => dispatch({ type: "CONVERT_LOWERCASE" })}
          >
            Convert Lowercase
          </button>
          <button
            className="btn"
            onClick={() => dispatch({ type: "CLEAR_TEXT" })}
          >
            Clear Text
          </button>
          <button className="btn" onClick={() => dispatch({ type: "COPY" })}>
            Copy To Clickboard
          </button>
          <button
            className="btn"
            onClick={() => dispatch({ type: "REMOVE_EXTRA_SPACES" })}
          >
            Remove Extra Space
          </button>
        </div>

        <div className="summary">
          <h2>Summery Of Your Text</h2>
          <p>Nummber of words : {state.numOfWords}</p>
          <p>Number of charecters : {state.numOfChar}</p>
          <p>Reading Time: {state.readTime} </p>
        </div>
      </div>
    </div>
  );
}

export default App;
