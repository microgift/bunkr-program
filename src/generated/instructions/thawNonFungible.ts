/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as splToken from '@solana/spl-token'
import * as beet from '@metaplex-foundation/beet'
import * as web3 from '@solana/web3.js'
import {
  AuthenticationObject,
  authenticationObjectBeet,
} from '../types/AuthenticationObject'

/**
 * @category Instructions
 * @category ThawNonFungible
 * @category generated
 */
export type ThawNonFungibleInstructionArgs = {
  authenticationObject: AuthenticationObject
}
/**
 * @category Instructions
 * @category ThawNonFungible
 * @category generated
 */
export const thawNonFungibleStruct = new beet.FixableBeetArgsStruct<
  ThawNonFungibleInstructionArgs & {
    instructionDiscriminator: number[] /* size: 8 */
  }
>(
  [
    ['instructionDiscriminator', beet.uniformFixedSizeArray(beet.u8, 8)],
    ['authenticationObject', authenticationObjectBeet],
  ],
  'ThawNonFungibleInstructionArgs'
)
/**
 * Accounts required by the _thawNonFungible_ instruction
 *
 * @property [_writable_] tokenAccount
 * @property [] tokenMint
 * @property [] tokenMintEdition
 * @property [_writable_] withdrawalTokenAccount
 * @property [] withdrawalAddress
 * @property [_writable_, **signer**] signer
 * @property [_writable_] bunkr
 * @property [] tokenMetadataProgram
 * @property [] associatedTokenProgram
 * @category Instructions
 * @category ThawNonFungible
 * @category generated
 */
export type ThawNonFungibleInstructionAccounts = {
  tokenAccount: web3.PublicKey
  tokenMint: web3.PublicKey
  tokenMintEdition: web3.PublicKey
  withdrawalTokenAccount: web3.PublicKey
  withdrawalAddress: web3.PublicKey
  signer: web3.PublicKey
  bunkr: web3.PublicKey
  tokenProgram?: web3.PublicKey
  tokenMetadataProgram: web3.PublicKey
  systemProgram?: web3.PublicKey
  associatedTokenProgram: web3.PublicKey
  anchorRemainingAccounts?: web3.AccountMeta[]
}

export const thawNonFungibleInstructionDiscriminator = [
  106, 156, 65, 170, 115, 70, 165, 93,
]

/**
 * Creates a _ThawNonFungible_ instruction.
 *
 * @param accounts that will be accessed while the instruction is processed
 * @param args to provide as instruction data to the program
 *
 * @category Instructions
 * @category ThawNonFungible
 * @category generated
 */
export function createThawNonFungibleInstruction(
  accounts: ThawNonFungibleInstructionAccounts,
  args: ThawNonFungibleInstructionArgs,
  programId = new web3.PublicKey('BunKrGBXdGxyTLjvE44eQXDuKY7TyHZfPu9bj2Ugk5j2')
) {
  const [data] = thawNonFungibleStruct.serialize({
    instructionDiscriminator: thawNonFungibleInstructionDiscriminator,
    ...args,
  })
  const keys: web3.AccountMeta[] = [
    {
      pubkey: accounts.tokenAccount,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.tokenMint,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.tokenMintEdition,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.withdrawalTokenAccount,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.withdrawalAddress,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.signer,
      isWritable: true,
      isSigner: true,
    },
    {
      pubkey: accounts.bunkr,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.tokenProgram ?? splToken.TOKEN_PROGRAM_ID,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.tokenMetadataProgram,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.systemProgram ?? web3.SystemProgram.programId,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.associatedTokenProgram,
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
