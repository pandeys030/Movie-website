import React from 'react';
import './JoinNow.css';

function JoinNow() {
  return (
    <div className="join-now">
      <h1>Unlimited movies, TV shows, and more.</h1>
      <p>Watch anywhere. Cancel anytime.</p>
      <form className="join-form">
        <input type="email" placeholder="Email address" required />
        <button type="submit">Get Started</button>
      </form>
    </div>
  );
}

export default JoinNow;
