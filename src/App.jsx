import "./App.css";
import Navigation from "./Components/Navigation";
import Header from "./Components/Header";
import TableComponent from "./Components/TableComponent";
import { TableDataContext } from "./context/TableDataContext";
import { useState } from "react";

function App() {
  const [tableData, setTableData] = useState([]);
  return (
    <>
      <Navigation />
      <Header />
      <TableDataContext.Provider value={{ tableData, setTableData }}>
        <TableComponent />
      </TableDataContext.Provider>
    </>
  );
}

export default App;
