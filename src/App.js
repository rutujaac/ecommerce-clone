import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { useEffect } from 'react';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Checkout from './components/Checkout/Checkout';
import Login from './components/Login/Login';
import { auth } from './firebase/firebase';
import { useStateValue } from './context/StateProvider';
import Address from './components/Address/Address';
import Payment from './components/Payment/Payment';

function App() {

  const [, dispatch] = useStateValue()

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if(user) {
        dispatch({
          type: 'SET_USER',
          user: user,
        })
      } else {
        dispatch({
          type: 'SET_USER',
          user: null,
        })
      }
    })

    return () => {
      unsubscribe()
    }
  }, [])

  return (
    <Router>
      <div className="App">   
        <Routes>
          <Route path="/checkout" element={<><Header /><Checkout /></>} />        
          <Route path="/login" element={<><Login /></>} />
          <Route path="/*" element={
            <React.Fragment>
              <Header />
              <Home />
            </React.Fragment>
          } />
          <Route path="/address" element={<><Address/></>} />
          <Route path="/payment" element={<><Payment /></>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
