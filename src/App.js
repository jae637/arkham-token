import { useState } from 'react';
import Main from './component/Main';
import TokenPool from './component/TokenPool';

function App() {
  const [tokenList, setTokenList] = useState([])
  return (
    <div className="container">
      <Main setTokenList={setTokenList} />
      {tokenList.length !== 0 ?
        <TokenPool tokenStringList={tokenList}></TokenPool>
        : ""
      }
    </div>
  );
}

export default App;
