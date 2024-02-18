import { BrowserRouter } from 'react-router-dom';

import './styles/_app.scss';
import './styles/_fonts.scss';
import './styles/_reset.scss';
import AppRoutes from './AppRoutes';

const App = () => {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
};

export default App;
