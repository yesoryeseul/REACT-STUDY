import "./App.css";
import Box from "./shared/components/Box/Box";
import Spacer from "./shared/components/Spacer/Spacer";

function App() {
  return (
    <div>
      <Box padding="20px" margin="10px" style={{ border: "1px solid" }}>
        test
      </Box>
      <Spacer size={16} />
      <div style={{ border: "1px solid" }}>test2</div>
    </div>
  );
}

export default App;
