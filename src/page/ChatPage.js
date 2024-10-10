import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './/chatpage.css'

function ChatPage() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Inject the chatling script
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://chatling.ai/js/embed.js';
    script.setAttribute('data-id', '7498966446');
    script.setAttribute('id', 'chatling-embed-script');
    script.setAttribute('data-display', 'fullscreen');
    document.body.appendChild(script);

    // Set up chatbot configuration
    window.chtlConfig = { chatbotId: '7498966446', display: 'fullscreen' };

    // Handle script load event to stop showing the spinner
    script.onload = () => {
      setIsLoading(false);  // Stop showing the spinner when script loads
    };

    // Clean up the script when the component is unmounted
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      {isLoading ? (
        // Show spinner while the chatbot script is loading
        <div className="spinner-container">
          <div className="spinner"></div>
          <p>Loading chat...</p>
        </div>
      ) : (
        // Chat script is loaded, so the chat will now display
        <div id="chat-container"></div>
      )}
    </div>
  );
}

export default ChatPage;
