import React, { FC , createContext } from 'react';
import './App.css'
import Person, { HairColor } from './components/Person';

interface AppContextInterface {
  name : string;
  age : 20;
  country : "Brazil";
}

const AppContext = createContext<AppContextInterface | null>(null);

const App : FC = () => {
  const contextValue : AppContextInterface = {
    name : "Pedro",
    age : 20,
    country : "Brazil"
  }
  
  return (
    <AppContext.Provider value={contextValue}>
      <div className="App">
      <Person name='Ward' age={20} email='rumanw99@gmail.com' hairColor={HairColor.Brown} />
    </div>
    </AppContext.Provider>
  );
}

export default App;
