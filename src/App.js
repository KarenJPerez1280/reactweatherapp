import "./styles.css";
import Search from "./Search";



export default function App() {
  return (
    <div>
      <Search city="colombia" />
      <footer className="footer">
        <a
          className="link"
          href="https://github.com/KarenJPerez1280/reactweatherapp"
          target="_blank"
          rel="noopener noreferrer"
        >
          Open-source code
        </a>
        , by Karen Perez
      </footer>
    </div>
  );
}

