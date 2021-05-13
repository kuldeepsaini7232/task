import React,{useState} from 'react';
import Header from './component/Header';
import Date from './component/Date';
import './App.css';
import Box from './component/Box';
import Card from './component/Card'
import AddIcon from '@material-ui/icons/Add';
import {Provider} from 'react-redux';
import store from './store';

const App=()=>{
  const [open,setOpen]=useState(false);
  const close=()=>setOpen(false);
  return(
    <Provider store={store}>
    <div className="container">
    <Header/>
    <Date/>
    <button className="m-btn" onClick={()=>setOpen(true)}><AddIcon/></button>
    <Card/>
    <Box open={open} close={close}/>
    </div>
    </Provider>
  )
}

export default App;