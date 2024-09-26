import "./App.css";
import axios from "axios";
import Sidebar from "./Layout/Sidebar";
import Table from "./Components/Table";

axios.defaults.baseURL = "http://127.0.0.1:8080/api/v1";
axios.defaults.withCredentials = false;

function App() {
  const handleTest = async (e) => {
    e.preventDefault();

    try{
      const {data} = await axios.get("/employees/test")
      console.log(data)

    }catch(e){
      console.log(e);
    }
  }
  return (
    <div className="flex flex-row">
      <Sidebar />
      {/* <a className="mt-20" onClick={handleTest}>
        <span className=" font-medium bg-blue-600 px-4 py-3 rounded-md text-white">Add</span>
      </a> */}
      <Table/>
    </div>
  );
}

export default App;
