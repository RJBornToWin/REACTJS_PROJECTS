//import logo from './logo.svg';
import './App.css';

import PageHeader from './Components/PageHeader';
import FilterableProductData from './Components/FilterableProductData';
import PageFooter from './Components/PageFooter';

function App() {
  const PRODUCTS = [
    {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
    {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
    {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
    {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
    {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
    {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
  ];

  return (
    <div className="App">
      <PageHeader text="Searcheable Product Data"/>
      <FilterableProductData className="App-content" products={PRODUCTS}/>
      <PageFooter text="This page was last edited on 25 June 2022, at 21:34 (UTC)." />
    </div>
  );
}

export default App;
