/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as beet from '@metaplex-foundation/beet'
import * as web3 from '@solana/web3.js'

/**
 * @category Instructions
 * @category CloseBunkr
 * @category generated
 */
export const closeBunkrStruct = new beet.BeetArgsStruct<{
  instructionDiscriminator: number[] /* size: 8 */
}>(
  [['instructionDiscriminator', beet.uniformFixedSizeArray(beet.u8, 8)]],
  'CloseBunkrInstructionArgs'
)
/**
 * Accounts required by the _closeBunkr_ instruction
 *
 * @property [_writable_] bunkr
 * @property [_writable_, **signer**] signer
 * @category Instructions
 * @category CloseBunkr
 * @category generated
 */
export type CloseBunkrInstructionAccounts = {
  bunkr: web3.PublicKey
  signer: web3.PublicKey
  systemProgram?: web3.PublicKey
  anchorRemainingAccounts?: web3.AccountMeta[]
}

export const closeBunkrInstructionDiscriminator = [
  99, 164, 239, 194, 84, 145, 13, 251,
]

/**
 * Creates a _CloseBunkr_ instruction.
 *
 * @param accounts that will be accessed while the instruction is processed
 * @category Instructions
 * @category CloseBunkr
 * @category generated
 */
export function createCloseBunkrInstruction(
  accounts: CloseBunkrInstructionAccounts,
  programId = new web3.PublicKey('BunKrGBXdGxyTLjvE44eQXDuKY7TyHZfPu9bj2Ugk5j2')
) {
  const [data] = closeBunkrStruct.serialize({
    instructionDiscriminator: closeBunkrInstructionDiscriminator,
  })
  const keys: web3.AccountMeta[] = [
    {
      pubkey: accounts.bunkr,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.signer,
      isWritable: true,
      isSigner: true,
    },
    {
      pubkey: accounts.systemProgram ?? web3.SystemProgram.programId,
      isWritable: false,
      isSigner: false,
    },
  ]

  if (accounts.anchorRemainingAccounts != null) {
    for (const acc of accounts.anchorRemainingAccounts) {
      keys.push(acc)
    }
  }

  const ix = new web3.TransactionInstruction({
    programId,
    keys,
    data,
  })
  return ix
}
