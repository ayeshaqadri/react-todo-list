// function App() {
//   return (
//     <>
// <h1>Ayesha</h1>
// <p>To-Do list</p>
//     </>
//   )
// }
// export default App
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// Step 1: Create a QueryClient
const queryClient = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
    {/* Step 2: Wrap your app with QueryClientProvider */}
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
