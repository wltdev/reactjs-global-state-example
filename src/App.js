import './App.css';
import Container from '@mui/material/Container';
import Appbar from './src/components/Appbar';
import Actions from './src/components/Actions';
import TodoList from './src/components/TodoList';

function App() {
  return (
    <Container maxWidth="sm">
      <Appbar />
      <div className="container">
        <Actions />
        <TodoList />
      </div>
    </Container>
  );
}

export default App;
