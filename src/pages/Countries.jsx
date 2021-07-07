import React from "react";
import Table from "../component/Table/Table";
import Button from "../component/Button/Button";

const Countries = ({ data }) => {
  const columns = [
    {
      path: "id",
      label: "Id",
    },
    { path: "name", label: "Name" },
    { path: "population", label: "Population" },
    { path: "size", label: "Size" },
    {
      label: "Download",
      content: (item) => (
        <Button label="Download Pdf" onclick={() => console.log(item)} />
      ),
    },
  ];

  return <Table columns={columns} data={data} />;
};

export default Countries;
