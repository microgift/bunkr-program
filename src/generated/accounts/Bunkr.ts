/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as web3 from '@solana/web3.js'
import * as beet from '@metaplex-foundation/beet'
import * as beetSolana from '@metaplex-foundation/beet-solana'

/**
 * Arguments used to create {@link Bunkr}
 * @category Accounts
 * @category generated
 */
export type BunkrArgs = {
  name: string
  withdrawAddress: web3.PublicKey
  activated: boolean
  initTime: number
  lastAccessedInterval: number
  root: number[] /* size: 32 */
  currentHash: number[] /* size: 32 */
  finalHash: number[] /* size: 32 */
  currentResetHash: number[] /* size: 32 */
  finalResetHash: number[] /* size: 32 */
  shadowDriveSpace: string
}

export const bunkrDiscriminator = [23, 78, 219, 41, 44, 106, 29, 227]
/**
 * Holds the data for the {@link Bunkr} Account and provides de/serialization
 * functionality for that data
 *
 * @category Accounts
 * @category generated
 */
export class Bunkr implements BunkrArgs {
  private constructor(
    readonly name: string,
    readonly withdrawAddress: web3.PublicKey,
    readonly activated: boolean,
    readonly initTime: number,
    readonly lastAccessedInterval: number,
    readonly root: number[] /* size: 32 */,
    readonly currentHash: number[] /* size: 32 */,
    readonly finalHash: number[] /* size: 32 */,
    readonly currentResetHash: number[] /* size: 32 */,
    readonly finalResetHash: number[] /* size: 32 */,
    readonly shadowDriveSpace: string
  ) {}

  /**
   * Creates a {@link Bunkr} instance from the provided args.
   */
  static fromArgs(args: BunkrArgs) {
    return new Bunkr(
      args.name,
      args.withdrawAddress,
      args.activated,
      args.initTime,
      args.lastAccessedInterval,
      args.root,
      args.currentHash,
      args.finalHash,
      args.currentResetHash,
      args.finalResetHash,
      args.shadowDriveSpace
    )
  }

  /**
   * Deserializes the {@link Bunkr} from the data of the provided {@link web3.AccountInfo}.
   * @returns a tuple of the account data and the offset up to which the buffer was read to obtain it.
   */
  static fromAccountInfo(
    accountInfo: web3.AccountInfo<Buffer>,
    offset = 0
  ): [Bunkr, number] {
    return Bunkr.deserialize(accountInfo.data, offset)
  }

  /**
   * Retrieves the account info from the provided address and deserializes
   * the {@link Bunkr} from its data.
   *
   * @throws Error if no account info is found at the address or if deserialization fails
   */
  static async fromAccountAddress(
    connection: web3.Connection,
    address: web3.PublicKey,
    commitmentOrConfig?: web3.Commitment | web3.GetAccountInfoConfig
  ): Promise<Bunkr> {
    const accountInfo = await connection.getAccountInfo(
      address,
      commitmentOrConfig
    )
    if (accountInfo == null) {
      throw new Error(`Unable to find Bunkr account at ${address}`)
    }
    return Bunkr.fromAccountInfo(accountInfo, 0)[0]
  }

  /**
   * Provides a {@link web3.Connection.getProgramAccounts} config builder,
   * to fetch accounts matching filters that can be specified via that builder.
   *
   * @param programId - the program that owns the accounts we are filtering
   */
  static gpaBuilder(
    programId: web3.PublicKey = new web3.PublicKey(
      'BunKrGBXdGxyTLjvE44eQXDuKY7TyHZfPu9bj2Ugk5j2'
    )
  ) {
    return beetSolana.GpaBuilder.fromStruct(programId, bunkrBeet)
  }

  /**
   * Deserializes the {@link Bunkr} from the provided data Buffer.
   * @returns a tuple of the account data and the offset up to which the buffer was read to obtain it.
   */
  static deserialize(buf: Buffer, offset = 0): [Bunkr, number] {
    return bunkrBeet.deserialize(buf, offset)
  }

  /**
   * Serializes the {@link Bunkr} into a Buffer.
   * @returns a tuple of the created Buffer and the offset up to which the buffer was written to store it.
   */
  serialize(): [Buffer, number] {
    return bunkrBeet.serialize({
      accountDiscriminator: bunkrDiscriminator,
      ...this,
    })
  }

  /**
   * Returns the byteSize of a {@link Buffer} holding the serialized data of
   * {@link Bunkr} for the provided args.
   *
   * @param args need to be provided since the byte size for this account
   * depends on them
   */
  static byteSize(args: BunkrArgs) {
    const instance = Bunkr.fromArgs(args)
    return bunkrBeet.toFixedFromValue({
      accountDiscriminator: bunkrDiscriminator,
      ...instance,
    }).byteSize
  }

  /**
   * Fetches the minimum balance needed to exempt an account holding
   * {@link Bunkr} data from rent
   *
   * @param args need to be provided since the byte size for this account
   * depends on them
   * @param connection used to retrieve the rent exemption information
   */
  static async getMinimumBalanceForRentExemption(
    args: BunkrArgs,
    connection: web3.Connection,
    commitment?: web3.Commitment
  ): Promise<number> {
    return connection.getMinimumBalanceForRentExemption(
      Bunkr.byteSize(args),
      commitment
    )
  }

  /**
   * Returns a readable version of {@link Bunkr} properties
   * and can be used to convert to JSON and/or logging
   */
  pretty() {
    return {
      name: this.name,
      withdrawAddress: this.withdrawAddress.toBase58(),
      activated: this.activated,
      initTime: this.initTime,
      lastAccessedInterval: this.lastAccessedInterval,
      root: this.root,
      currentHash: this.currentHash,
      finalHash: this.finalHash,
      currentResetHash: this.currentResetHash,
      finalResetHash: this.finalResetHash,
      shadowDriveSpace: this.shadowDriveSpace,
    }
  }
}

/**
 * @category Accounts
 * @category generated
 */
export const bunkrBeet = new beet.FixableBeetStruct<
  Bunkr,
  BunkrArgs & {
    accountDiscriminator: number[] /* size: 8 */
  }
>(
  [
    ['accountDiscriminator', beet.uniformFixedSizeArray(beet.u8, 8)],
    ['name', beet.utf8String],
    ['withdrawAddress', beetSolana.publicKey],
    ['activated', beet.bool],
    ['initTime', beet.u32],
    ['lastAccessedInterval', beet.u32],
    ['root', beet.uniformFixedSizeArray(beet.u8, 32)],
    ['currentHash', beet.uniformFixedSizeArray(beet.u8, 32)],
    ['finalHash', beet.uniformFixedSizeArray(beet.u8, 32)],
    ['currentResetHash', beet.uniformFixedSizeArray(beet.u8, 32)],
    ['finalResetHash', beet.uniformFixedSizeArray(beet.u8, 32)],
    ['shadowDriveSpace', beet.utf8String],
  ],
  Bunkr.fromArgs,
  'Bunkr'
)
