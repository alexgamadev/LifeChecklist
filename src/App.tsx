import './App.css';
import ChecklistForm from './components/ChecklistForm';
import ChecklistGroup from './components/ChecklistGroup';
import ChecklistItem from './components/ChecklistItem';
import DefaultTemplate from './data/DefaultTemplate.json';

interface IChecklistItem {
  text: string,
  checked: boolean,
  category: number;
}

interface IChecklistGroup {
  name: string;
  items?: IChecklistItem;
}
function App() {
  const checklistItems = DefaultTemplate.categories.map((categoryName, categoryId) => {
    const items = DefaultTemplate.checklistItems.filter(item => {
      return item.category === categoryId;
    });
    return { name: categoryName, items };
  });

  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Life Checklist
        </h1>
        <ChecklistForm>
          {checklistItems.map((item, index) => {
            return (
              <ChecklistGroup title={item.name} key={index}>
                {item.items.map((item, index) => {
                  return (
                    <>
                      <ChecklistItem key={index} text={item.text} />
                    </>);
                })}
              </ChecklistGroup>);
          })}
        </ChecklistForm>
      </header>
    </div>
  );
}

export default App;
