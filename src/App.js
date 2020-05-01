import React from 'react';
import { AuthProvider } from './contexts/auth'

import Routes from './routes';

function App() {
  return (
    <div className="App">
      {/* <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
      </Routes> */}

      <AuthProvider>
        <Routes />
      </AuthProvider>
    </div>
  );
}

export default App;
