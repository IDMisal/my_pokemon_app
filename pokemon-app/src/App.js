// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import HomePage from './pages/HomePage';
// import DetailPage from './pages/DetailPage';
// import './App.css';

// const App = () => {
//   return (
//     <Router>
//       <div className="app">
//         <Routes>
//           <Route exact path="/" element={<HomePage />} />
//           <Route path="/pokemon/:id" element={<DetailPage />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// };

// export default App;


import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

// Lazy load the components
const HomePage = lazy(() => import('./pages/HomePage'));
const DetailPage = lazy(() => import('./pages/DetailPage'));

const App = () => {
  return (
    <Router>
      <div className="app">
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route path="/pokemon/:id" element={<DetailPage />} />
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
};

export default App;
