import { DarkModeProvider } from "context/DarkModeContext";
import "./App.css";
import Planner from "components/Planner";

function App() {
  return (
    <DarkModeProvider>
      <div className="App">
        <Planner />
      </div>
    </DarkModeProvider>
  );
}

export default App;
