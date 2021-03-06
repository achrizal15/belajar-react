import React, { createContext, useReducer, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./page/HomePage";
import About from "./page/About";
import NewsFeed from "./page/NewsFeed";

export const KeranjangContext = createContext();
const initialState = {
  jumlah: 0,
  harga: 1000,
  total: 0,
};
const reduser = (state, action) => {
  switch (action) {
    case "tambah":
      return {
        ...state,
        jumlah: state.jumlah + 1,
        total: state.total + state.harga,
      };
    case "kurangi":
      return {
        ...state,
        jumlah: state.jumlah === 0 ? 0 : state.jumlah - 1,
        total: state.total - state.harga,
      };
    default:
      return state;
  }
};
export default function App() {
  const [value, setValue] = useReducer(reduser, initialState);
  return (
    <Router>
      <KeranjangContext.Provider value={{ value, setValue }}>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/bacanews" component={NewsFeed} />
          <Route path="/About" component={About} />
        </Switch>
      </KeranjangContext.Provider>
    </Router>
  );
}
