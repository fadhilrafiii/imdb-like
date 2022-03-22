import React, { lazy, Suspense } from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navbar from 'Components/Navbar';
import LoadingPage from 'Pages/Loading';

const Home = lazy(() => import('Pages/Home'));
const Animes = lazy(() => import('Pages/Animes'));

function App() {
  return (
    <Router>
      <Navbar />
      <Suspense fallback={<LoadingPage />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/animes" element={<Animes />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
