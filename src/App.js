import "./App.css";
import axios from "axios";

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
    <div>
      <h1>Saturn</h1>
      <button onClick={handleTest} className="p-8 bg-blue-200 text-black">Test</button>
    </div>
  );
}

export default App;
