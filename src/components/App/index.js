// == Import npm
import React from 'react';


// == Import des datas
import currencies from 'src/data/currencies';

// == Import des components
import Input from '../Input';
import List from '../List';
import Result from '../Result';

// == Import des styles
import './styles.scss';

// == Composant
const App = () => (
  <div className="app">
    <Input list={currencies} />
    <List list={currencies} />
    <Result />
  </div>
);

// == Export
export default App;
