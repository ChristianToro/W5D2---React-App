import React from 'react'
import './app.css'
import Navbar from './components/Navbar';
import Home from './components/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Review from './components/Review';
import reviews from './reviewsData';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          {reviews.map((review) => (
            <Route 
              key={review.id} 
              path={`/${review.id}`} 
              element={
                <Review 
                  title={review.title} 
                  author={review.author} 
                  review={review.review} 
                  imageUrl={review.imageUrl}
                />
              }
            />
          ))}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
