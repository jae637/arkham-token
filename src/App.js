import { useState } from 'react';
import Main from './component/Main';
import TokenPool from './component/TokenPool';

function App() {
  const [tokenList, setTokenList] = useState([])
  return (
    <div>
      {tokenList.length !== 0 ?
        <TokenPool tokenStringList={tokenList}></TokenPool>
        : <Main setTokenList={setTokenList} />
      }
    </div>
  );
}

export default App;
