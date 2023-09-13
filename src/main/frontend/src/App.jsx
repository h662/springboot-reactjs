import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [hello, setHello] = useState("");

  const getHello = async () => {
    try {
      const response = await axios.get("/api/hello");

      setHello(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getHello();
  }, []);

  return <div className="bg-red-100">{hello}</div>;
}

export default App;
