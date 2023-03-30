import { useEffect, useState } from "react";
import "./styles.css";
import axios from "axios";
export default function App() {
  const [data, setData] = useState();

  /* 1. By Using fetch */
  useEffect(() => {
    fetch("https://edtechservice.innovationm.com/v1/counsellor/topCounselors")
      .then((response) => response.json())
      .then((data) => setData(data?.data))
      .catch((err) => console.log("error", err));
  }, []);

  /* 2. By using async await */
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          "https://edtechservice.innovationm.com/v1/counsellor/topCounselors"
        );
        const data = await response.json();
        setData(data?.data);
      } catch (err) {
        console.log("error", err);
      }
    }
    fetchData();
  }, []);

  /* 3. By using axios */
  useEffect(() => {
    function fetchData() {
      axios
        .get(
          "https://edtechservice.innovationm.com/v1/counsellor/topCounselors"
        )
        .then((res) => {
          setData(res?.data?.data);
        })
        .catch((err) => console.log(err));
    }
    fetchData();
  }, []);

  return (
    <div className="App">
      {data?.map((item, index) => (
        <p key={index}>{item?.first_name}</p>
      ))}
    </div>
  );
}
