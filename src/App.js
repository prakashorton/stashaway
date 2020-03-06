import React, { useEffect, useState } from "react";
import "./App.css";
import Navigation from "./Navigation";
import ProductList from "./ProductList";
import FilterPane from "./FilterPane";
import SearchBar from './SearchBar';
import axios from 'axios';

function App() {
  const [completeProducts, setCompleteProducts] = useState([]);
  const [topRamenProducts, setProducts] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const URL = 'http://starlord.hackerearth.com/TopRamen';

  const onProductReceived = (products) => {
    setCompleteProducts([...products]);
    setProducts([...products]);
    buildFilter(products);
  }

  const buildFilter = (products) => {
    const filter = {};
    Object.keys(products[0]).forEach((key) => {
      filter[key] = buildFilterData([...new Set(products.map(item => item[key]))].slice(0, 10));;
    });
    setFilterData(filter);
  }

  const buildFilterData = (products) => products.map(pro => 
    new Object({ 'Name': pro, 'Selected': false }));

  const onFilterUpdated = (values) => {
    if (values) {
      const isFilterApplicable = Object.keys(values).some(fi => Array.isArray(values[fi]) && values[fi].length);
      if (isFilterApplicable) {
        const filteredProducts = completeProducts.filter(c => {
          for (let key in values) {
            for (var va in values[key]) {
              if (c[key] == values[key][va]) {
                return true;
              }
            }
          }
          return false;
        })
        setProducts(filteredProducts);
      } else {
        setProducts(completeProducts);
      }
    }
  }

  const onSearch = ({ target }) => {
    if (target.value) {
      const filteredData = topRamenProducts.filter(o =>
        Object.keys(o).some(k => o[k].toString().toLowerCase()
          .includes(target.value.toLowerCase())));
      setProducts(filteredData);
    } else {
      setProducts(completeProducts);
    }
  }

  useEffect(() => {
    axios.get(URL).then(({ data: products }) => onProductReceived(products));
  }, []);

  return (
    <div className="App">
      <Navigation></Navigation>
      <div className="container-fluid">
        <div className="row">
          <SearchBar onSearchUpdated={onSearch} />
        </div>
        <hr />
        <div className="row">
          <div className="col-sm-2">
            <p>Show results for</p>
            <FilterPane
              onFilterUpdated={onFilterUpdated}
              data={filterData}></FilterPane>
          </div>
          <div className="col-sm-10">
            <ProductList products={topRamenProducts} />
          </div>
        </div>
      </div>
      <div className="footer">
        <p>2020 HackerEarth</p>
      </div>
    </div>
  );
}

export default App;