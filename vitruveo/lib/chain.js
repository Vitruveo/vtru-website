// Vitruveo Mainnet chain definition (server-safe)
export const vitruveo = {
  id: 1490,
  name: 'Vitruveo',
  nativeCurrency: {
    decimals: 18,
    name: 'VTRU',
    symbol: 'VTRU',
  },
  rpcUrls: {
    default: { http: ['https://rpc.vitruveo.xyz'] },
    public: { http: ['https://rpc.vitruveo.xyz'] },
  },
  blockExplorers: {
    default: { name: 'Explorer', url: 'https://explorer.vitruveo.xyz' },
  },
};

// Minimum balance threshold for hydration (0.10 VTRU)
export const HYDRATE_THRESHOLD = 0.1;
export const HYDRATE_AMOUNT = 0.1; // Amount to top up to
