import "./styles.css";
import useFetchy from "./use-Fetch";

export default function App() {
  const uri = "https://inshorts.deta.dev/news?category=science";
  const { data, error, loading } = useFetchy(uri);
  console.log(data);
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      {loading && <h1>Loading...</h1>}
      {error && <h3>something went wrong</h3>}
      {JSON.stringify(data)}
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
