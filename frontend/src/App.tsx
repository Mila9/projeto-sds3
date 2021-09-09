import DataTable from "components/DataTable";
import NavBar from "components/NavBar";

function App() {
  return (
    <>
    <div className="container">
    <NavBar/>
      <h1 className= "text-primary">Olá Mundo</h1>
      <DataTable/>
    </div>
    </>
  );
}

export default App;
