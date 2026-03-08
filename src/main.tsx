import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';

// React will replace the pre-rendered static HTML inside #root.
// Crawlers see the static content; users get the full React app.
createRoot(document.getElementById('root')!).render(<App />);
