import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css'

function HomePage() {
  const navigate = useNavigate();  // Hook for navigation

  const handleChatNavigation = () => {
    navigate('/chat');  // Navigate to the Chat page
  };

  return (
    <div className='home'>
      <h1>Welcome to BlueChip ChatBot</h1>
      <button onClick={handleChatNavigation}>
        Chat with Bot
      </button>
      <p>Welcome to BlueChip – Your Trusted Partner in Innovation<br></br><br></br>
            At BlueChip, we believe in the power of cutting-edge technology to transform the wau seamless,<br></br>
            innovative solutions tailored to meet your unique needs. Why you live, work, and connect. Our <br></br>
            platform is designed to offer yoether you're exploring our advanced products, seeking expert <br></br>
            support, or simply looking for inspiration, we’re here to empower your journey.<br></br><br></br>
            Discover a world of possibilities with BlueChip, where technology meets excellence.
        </p>
    </div>
  );
}

export default HomePage;
