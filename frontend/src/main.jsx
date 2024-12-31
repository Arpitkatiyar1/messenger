import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './main.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import {Provider} from 'react-redux';
import store from './store/index.js';

import { positions, transitions, Provider as AlertProvider} from 'react-alert';
import alertTemplate from 'react-alert-template-basic';
const options = {
  timeout : 5000,
  positions: positions.BOTTOM_CENTER,
  transitions : transitions.SCALE
}

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <AlertProvider template={alertTemplate} {...options} >
      <App />
    </AlertProvider>
  </Provider>
);
