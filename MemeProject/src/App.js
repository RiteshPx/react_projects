import './App.css';
import Random from './components/Random';
import Tag from './components/Tag';

function App() {
  return (
    <div className="App w-full min-h-screen bg-pink-300 flex flex-col items-center justify-center p-4">
      <header className="w-full bg-slate-500 text-yellow-300 rounded-sm p-4 mb-6 shadow-lg">
        <h2 className="text-3xl font-bold text-center">GIF</h2>
      </header>

      <main className="flex  w-full items-center space-y-6">
        <Random />
        <Tag />
      </main>
    </div>
  );
}

export default App;
