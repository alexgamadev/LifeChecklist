import './App.css';
import ChecklistForm from './components/ChecklistForm';
import ChecklistItem from './components/ChecklistItem';
import DefaultTemplate from './data/DefaultTemplate.json';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Life Checklist
        </h1>
        <ChecklistForm>
          {DefaultTemplate.checklistItems.map((item, index) => {
            return (
              <>
                <ChecklistItem key={index} text={item.text} />
              </>);
          })}
        </ChecklistForm>
      </header>
    </div>
  );
}

export default App;
