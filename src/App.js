import './styles/normalize.css';
import 'antd/dist/antd.css';
import './styles/global.css';
import CustomInput from './pages/CustomInput';
import ArrayValues from './pages/ArrayValues';
import { useState } from 'react';
import Button from '@material-ui/core/Button';

function App() {
  const [page, setPage] = useState('custom-input');

  return (
    <div style={{ margin: '20px' }}>
      <nav style={{ height: '50px' }}>
        <Button color="primary" onClick={() => setPage('custom-input')}>
          Custom Input
        </Button>
        <Button color="primary" onClick={() => setPage('array-values')}>
          Array Values
        </Button>
      </nav>
      <main>
        {page === 'custom-input' && <CustomInput />}
        {page === 'array-values' && <ArrayValues />}
      </main>
    </div>
  );
}

export default App;
