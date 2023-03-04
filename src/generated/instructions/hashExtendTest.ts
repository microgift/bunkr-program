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
 * @category HashExtendTest
 * @category generated
 */
export type HashExtendTestInstructionArgs = {
  hash: Uint8Array
  hashExtended: Uint8Array
}
/**
 * @category Instructions
 * @category HashExtendTest
 * @category generated
 */
export const hashExtendTestStruct = new beet.FixableBeetArgsStruct<
  HashExtendTestInstructionArgs & {
    instructionDiscriminator: number[] /* size: 8 */
  }
>(
  [
    ['instructionDiscriminator', beet.uniformFixedSizeArray(beet.u8, 8)],
    ['hash', beet.bytes],
    ['hashExtended', beet.bytes],
  ],
  'HashExtendTestInstructionArgs'
)
/**
 * Accounts required by the _hashExtendTest_ instruction
 *
 * @property [_writable_, **signer**] signer
 * @category Instructions
 * @category HashExtendTest
 * @category generated
 */
export type HashExtendTestInstructionAccounts = {
  signer: web3.PublicKey
  anchorRemainingAccounts?: web3.AccountMeta[]
}

export const hashExtendTestInstructionDiscriminator = [
  33, 82, 241, 47, 254, 21, 210, 237,
]

/**
 * Creates a _HashExtendTest_ instruction.
 *
 * @param accounts that will be accessed while the instruction is processed
 * @param args to provide as instruction data to the program
 *
 * @category Instructions
 * @category HashExtendTest
 * @category generated
 */
export function createHashExtendTestInstruction(
  accounts: HashExtendTestInstructionAccounts,
  args: HashExtendTestInstructionArgs,
  programId = new web3.PublicKey('undefined')
) {
  const [data] = hashExtendTestStruct.serialize({
    instructionDiscriminator: hashExtendTestInstructionDiscriminator,
    ...args,
  })
  const keys: web3.AccountMeta[] = [
    {
      pubkey: accounts.signer,
      isWritable: true,
      isSigner: true,
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
