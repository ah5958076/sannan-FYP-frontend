import './App.css';
import { Routes,Route } from 'react-router-dom';

import NavBar from './components/Nav'
import Sidebar from './components/Sidebar';

import ProtectedRoute from './components/auth/ProtectedRouter';
import routes from './utils/getRoutes'
function App() {
  return (
    <div>
      <NavBar/>

      <div className='flex w-100'>
        <Sidebar/>
        <div className='flex justify-center items-center w-full bg-secondary-100'>
          <Routes>
              {
                routes?.map((route,index) => 
                  <Route key={`route${index}`} path={route.path}
                        element={<ProtectedRoute roles={route.roles}>
                          {route.element}
                        </ProtectedRoute>}
                  />
                )
              }            
          </Routes>
        </div>
      </div>
      
    </div>
  );
}

export default App;













