import BarChart from "components/BarChart";
import DataTable from "components/DataTable";
import NavBar from "components/NavBar";
import DonutChart from "components/DonutChart";

function App() {
  return (
    <>
    <div className="container">
    <NavBar/>
      <h1 className= "text-primary py-3">Dashboord de Vendas</h1>
      <div className="row px-3">
      <div className="col-sm-6">
          <h5 className="text-center text-primary">Taxa de sucesso (%)</h5>
          <BarChart/>
        </div>

        <div className="col-sm-6">
          <h5 className="text-center text-primary">Taxa de sucesso</h5>
          <DonutChart/>
        </div>

      </div>

      <div className="py-3">
        <h2 className="text-primary">Todas as Vendas</h2>
      </div>
      <DataTable/>
    </div>
    </>
  );
}

export default App;
