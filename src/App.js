//import logo from './logo.svg';
import './App.css';

import PageHeader from './Components/PageHeader';
import SearcheableProductData from './Components/SearcheableProductData';
import PageFooter from './Components/PageFooter';

function App() {
  return (
    <div className="App">
      <PageHeader text="Searcheable Product Data"/>
      <SearcheableProductData className="App-content"/>
      <PageFooter text="This page was last edited on 25 June 2022, at 21:34 (UTC)." />
    </div>
  );
}

export default App;
