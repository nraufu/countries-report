import { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ReportMap from "../component/Map/ReportMap";
import Table from "../component/Table/Table";
import { getCountriesData } from "../services/countriesService";

const map = document.getElementById("svgMap");

const Countries = () => {
  map.style.display = "block";

  const [data, setData] = useState([]);

  useEffect(() => {
    const countriesData = getCountriesData();
    setData(countriesData);
  }, []);

  const columns = [
    {
      path: "id",
      label: "Id",
    },
    { path: "name", label: "Name" },
    { path: "population", label: "Population" },
    { path: "size", label: "Size" },
    {
      label: "",
      content: (country) => (
        <Link className="btn btn-success" to={`/country/${country.id}`}>
          View Report
        </Link>
      ),
    },
  ];

  return (
    <Fragment>
      <Table columns={columns} data={data} />
      <ReportMap />
    </Fragment>
  );
};

export default Countries;
