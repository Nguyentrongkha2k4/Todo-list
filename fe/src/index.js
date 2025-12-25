import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, useRoutes } from 'react-router-dom';
import { routers } from './routes/routes';
import { TodoProvider } from './providers/TodoProvider';
import { AuthProvider } from './providers/AuthProvider';
function Router(){
  return useRoutes(routers)
}
ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AuthProvider>
      <TodoProvider>
        <Router />
      </TodoProvider>
    </AuthProvider>
  </BrowserRouter>
);