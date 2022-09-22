import "./App.css";

import MainPage from "./pages/Mainpage";
import DataProvider from "./context/dataContext";

function App() {
  return (
    <div className="App">
      <DataProvider>
        <MainPage />
      </DataProvider>
    </div>
  );
}

export default App;
