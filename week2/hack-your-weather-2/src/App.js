import './App.css';
import Search from "./components/Search";


export default function App() {
  return (
    <div className="App">
      Weather
      <div>
        <form>
          <label>
            <input type="text" value={null} onChange={Search} />
          </label>
          <input type="submit" value="Search" />
        </form>
      </div>
    </div>
  );
}