import './styles/normalize.css';
import 'antd/dist/antd.css';
import './styles/global.css';
import CustomInput from './pages/CustomInput';
import ArrayValues from './pages/ArrayValues';
import ReactQuery from './pages/ReactQuery';
import { useState } from 'react';
import Button from '@material-ui/core/Button';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

function App() {
  const [page, setPage] = useState('custom-input');

  return (
    <QueryClientProvider client={queryClient}>
      <div style={{ margin: '20px' }}>
        <nav style={{ height: '50px' }}>
          <Button color="primary" onClick={() => setPage('custom-input')}>
            Custom Input
          </Button>
          <Button color="primary" onClick={() => setPage('array-values')}>
            Array Values
          </Button>
          <Button color="primary" onClick={() => setPage('react-query')}>
            React Query
          </Button>
        </nav>
        <main>
          {page === 'custom-input' && <CustomInput />}
          {page === 'array-values' && <ArrayValues />}
          {page === 'react-query' && <ReactQuery />}
        </main>
      </div>
    </QueryClientProvider>
  );
}

export default App;
