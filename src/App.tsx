import React, { lazy, Suspense } from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Loading from 'Components/Loading';
import Navbar from 'Components/Navbar';

const Home = lazy(() => import('Pages/Home'));
const Movies = lazy(() => import('Pages/Movies'));

function App() {
  return (
    <Router>
      <Navbar />
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
