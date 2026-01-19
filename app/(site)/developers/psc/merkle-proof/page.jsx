import { MerkleProofHeader } from '@/vitruveo/components/merkle-proof/merkle-proof-header';
import { MerkleProofExample } from '@/vitruveo/components/merkle-proof/merkle-proof-example';
import { MerkleProofInfo } from '@/vitruveo/components/merkle-proof/merkle-proof-info';

export const metadata = {
  title: 'Merkle Proof - Protocol Smart Contracts - Vitruveo',
  description: 'Verify Merkle tree membership proofs efficiently.',
};

export default function MerkleProofPage() {
  return (
    <div className="container py-4">
      <MerkleProofHeader />
      <MerkleProofExample />
      <MerkleProofInfo />
    </div>
  );
}
