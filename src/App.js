import Wallet from './components/Wallet';
import Transactions from './components/Transactions';
import Navbar from './components/Navbar';

const style = {
  wrapper: `h-screen max-h-screen h-min-screen w-screen bg-[#f0eded] text-white select-none flex flex-col justify-between`,
}

function App() {
  return (
    <div className={style.wrapper}>
      {/* <Navbar></Navbar>
      <Wallet></Wallet>
      <Transactions></Transactions> */}
      <div><Navbar></Navbar></div>
      <div><Wallet></Wallet></div>
      <div><Transactions></Transactions></div>
    </div>
  );
}

export default App;
