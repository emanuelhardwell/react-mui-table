import React, { useEffect, useState } from "react";
import axios from "axios";
import MUIDataTable from "mui-datatables";

export const TableAxios = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    console.log("Use effect");
    getProducts();
  }, []);

  const urlBase = "https://fakestoreapi.com/products";
  const getProducts = async () => {
    const resp = await axios.get(urlBase);
    const data = await resp.data;
    console.log(data);
    setProducts(data);
  };

  const colums = [
    { name: "id", label: "ID" },
    { name: "title", label: "TITLE" },
    { name: "price", label: "PRICE" },
    { name: "category", label: "CATEGORY" },
    { name: "description", label: "DESCRIPTION" },
  ];

  const options = {
    filterType: "checkbox",
  };

  return (
    <>
      <MUIDataTable
        title={"List Products of store"}
        columns={colums}
        data={products}
        options={options}
      />
    </>
  );
};
