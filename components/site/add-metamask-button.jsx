'use client';

export function AddToMetaMaskButton() {
  const addNetwork = async () => {
    if (typeof window.ethereum === 'undefined') {
      window.open('https://metamask.io/download/', '_blank');
      return;
    }

    try {
      await window.ethereum.request({
        method: 'wallet_addEthereumChain',
        params: [{
          chainId: '0x5D2', // 1490 in hex
          chainName: 'Vitruveo Mainnet',
          nativeCurrency: {
            name: 'VTRU',
            symbol: 'VTRU',
            decimals: 18,
          },
          rpcUrls: ['https://rpc.vitruveo.ai'],
          blockExplorerUrls: ['https://explorer.vitruveo.ai'],
        }],
      });
    } catch (error) {
      console.error('Failed to add network:', error);
    }
  };

  return (
    <button onClick={addNetwork} className="btn btn-outline-light btn-sm">
      Add to MetaMask
    </button>
  );
}
