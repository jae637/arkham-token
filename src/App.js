import { useState } from 'react';
import Main from './component/Main';
import TokenPool from './component/TokenPool';
import './component/Token.css';

function App() {
  const [tokenList, setTokenList] = useState([])
  return (
    <div className='bgimg'>
      {tokenList.length !== 0 ?
        <TokenPool tokenStringList={tokenList} setTokenList={setTokenList}></TokenPool>
        : <Main setTokenList={setTokenList} />
      }
    </div>
  );
}

export default App;
