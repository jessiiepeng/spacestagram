
import './App.css';
import Header from './header/Header'
import PhotoCard from './photos/PhotoCard'
import PhotoCards from './photos/PhotoCards'
import React, { useState, useEffect } from "react";
import { createTheme, ThemeProvider } from '@mui/material/styles';


const theme = createTheme({
  palette: {
    primary: {
      light: '#5f5fc4',
      main: '#283593',
      dark: '#001064',
      contrastText: '#fff',
    },
    secondary: {
      light: '#f8fdff',
      main: '#c5cae9',
      dark: '#9499b7',
      contrastText: '#000',
    },
  },
});




function App() {
  const [queryData, setQueryData] = useState('star');  

  const currentSearch = search => {
    setQueryData(search);
    console.log(queryData);
  }

  
  return (

    <div className="App">
      <ThemeProvider theme={theme}>
      <Header search={currentSearch}/>
      <PhotoCards query={queryData} />
      </ThemeProvider>
    </div>
  );
}

export default App;
