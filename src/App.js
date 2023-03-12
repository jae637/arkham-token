import TokenPool from './component/TokenPool';

function App() {
  return (
    <div style={{ display: "flex" }}>
      <TokenPool tokenStringList={["BACK", "FRONT1", "FRONT1", "FRONT1", "FRONT1"]}></TokenPool>
    </div>
  );
}

export default App;
