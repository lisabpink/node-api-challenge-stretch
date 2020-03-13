import React from "react";
import Header from "./components/Header.js";
import AppRouter from "./components/AppRouter.js";
import ActionCard from "./components/ActionCard";


export default function App() {
  return (
    <main>
      <Header />
      <AppRouter />
      <ActionCard/>
    </main>
  );
}