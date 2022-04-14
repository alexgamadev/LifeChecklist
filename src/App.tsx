import './App.css';
import ChecklistForm from './components/ChecklistForm';
import ChecklistItem from './components/ChecklistItem';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Life Checklist
        </h1>
        <ChecklistForm>
          <ChecklistItem key={1} text="First checkbox item" />
          <ChecklistItem key={2} text="Second checkbox item" />
        </ChecklistForm>
      </header>
    </div>
  );
}

export default App;
