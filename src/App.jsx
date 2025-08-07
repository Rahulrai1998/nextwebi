import { useState } from "react";
import FirstSection from "./components/FirstSection";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <FirstSection />
    </>
  );
}

export default App;
