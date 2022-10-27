import './App.css';
import { RouterProvider } from 'react-router-dom';
import Route from './Routes/Route';

function App() {

  return (
    <>
      <RouterProvider router={Route}></RouterProvider>
    </>
  );
}

export default App;
