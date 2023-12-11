
import { useMemo } from "react";
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletModalProvider, } from '@solana/wallet-adapter-react-ui';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { PhantomWalletAdapter, SolflareWalletAdapter, TorusWalletAdapter, SolongWalletAdapter, AlphaWalletAdapter, TrustWalletAdapter } from '@solana/wallet-adapter-wallets';
import '@solana/wallet-adapter-react-ui/styles.css'

import { ProgramProvider } from './utils/ProgramProvider';
import Header from './components/header';
import LockPage from './pages/lock';
import LiveLockPage from './pages/live_lock';
import './assets/styles.scss'

import LeftLine from './assets/images/saas-bg-left.svg'
import RightLine from './assets/images/saas-bg-right.svg'
import Disclaimer from "./components/disclaimer";

function App() {
  const network = WalletAdapterNetwork.Mainnet
  // const endpoint = 'https://mainnet.helius-rpc.com/?api-key=031b1353-c5f8-4076-99fa-309df75bc696'
  const endpoint = 'https://small-convincing-gas.solana-mainnet.quiknode.pro/d4e39d47407035f21c92d5b045427da91164e502/'
  const wallets = useMemo(() => [
    new PhantomWalletAdapter(),
    new SolflareWalletAdapter({ network }),
    new TorusWalletAdapter(),
    new SolongWalletAdapter(),
    new AlphaWalletAdapter(),
    new TrustWalletAdapter()
  ], [network]);

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} autoConnect>
        <WalletModalProvider>
          <ProgramProvider>
            <img src={LeftLine} className="left-line-img" alt=""/>
            <img src={RightLine} className="right-line-img" alt=""/>
            <Disclaimer/>
            <Header/>
            <LockPage/>
            <LiveLockPage/>
          </ProgramProvider>
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
}

export default App;