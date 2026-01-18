import { MerkleProofInfo } from '@/vitruveo/components/merkle-proof/merkle-proof-info';
import { MerkleProofExample } from '@/vitruveo/components/merkle-proof/merkle-proof-example';

export const metadata = {
  title: 'MerkleProof - Protocol Smart Contracts - Vitruveo',
  description: 'Verify Merkle tree membership proofs efficiently.',
};

export default function MerkleProofPage() {
  return (
    <div className="container py-4">
      <MerkleProofInfo />
      <MerkleProofExample />
    </div>
  );
}
