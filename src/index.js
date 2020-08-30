import React from 'react';
import ReactDOM from 'react-dom';
import "bootstrap/dist/css/bootstrap.min.css"
import './index.css';
import App from './App';
import {store} from "./store"
import { Provider } from 'react-redux';

import *as taskService from './services/TaskService';
//run this command to start server for taskServices >npx json-server --port 3001 db.json
taskService.getTasks().then((tasks)=>{
    console.log(tasks)  
  });

ReactDOM.render(
<Provider store={store}>
<App />
</Provider>,
document.getElementById('root')
);
