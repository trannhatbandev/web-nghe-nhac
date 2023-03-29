import React from 'react';
import rootReducer from './store/reducers/rootReducer';
import { useSelector, useDispatch } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { typeRootReducer, IRootReducer, typeAppReducer } from './constant/constant';

function App() {
  const { test } = useSelector((state: IRootReducer) => state.app)
  console.log(test)
  return (
    <>
      <div className="text-3xl font-bold underline">Hello world!</div>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {/* Same as */}
      <ToastContainer />
    </>
  );
}

export default App;
