
interface PhantomProvider {
  isPhantom: boolean;
  connect(): Promise<{ publicKey: { toString(): string } }>;
  disconnect(): Promise<void>;
  signTransaction(transaction: any): Promise<any>;
  signAllTransactions(transactions: any[]): Promise<any[]>;
  signMessage(message: Uint8Array, display?: string): Promise<{ signature: Uint8Array; publicKey: { toString(): string } }>;
}

declare global {
  interface Window {
    solana?: PhantomProvider;
  }
}

export {};
