/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as beet from '@metaplex-foundation/beet'
import * as web3 from '@solana/web3.js'
import * as beetSolana from '@metaplex-foundation/beet-solana'

/**
 * Arguments used to create {@link TestVault}
 * @category Accounts
 * @category generated
 */
export type TestVaultArgs = {
  myData: string
}

export const testVaultDiscriminator = [20, 73, 64, 180, 6, 44, 154, 93]
/**
 * Holds the data for the {@link TestVault} Account and provides de/serialization
 * functionality for that data
 *
 * @category Accounts
 * @category generated
 */
export class TestVault implements TestVaultArgs {
  private constructor(readonly myData: string) {}

  /**
   * Creates a {@link TestVault} instance from the provided args.
   */
  static fromArgs(args: TestVaultArgs) {
    return new TestVault(args.myData)
  }

  /**
   * Deserializes the {@link TestVault} from the data of the provided {@link web3.AccountInfo}.
   * @returns a tuple of the account data and the offset up to which the buffer was read to obtain it.
   */
  static fromAccountInfo(
    accountInfo: web3.AccountInfo<Buffer>,
    offset = 0
  ): [TestVault, number] {
    return TestVault.deserialize(accountInfo.data, offset)
  }

  /**
   * Retrieves the account info from the provided address and deserializes
   * the {@link TestVault} from its data.
   *
   * @throws Error if no account info is found at the address or if deserialization fails
   */
  static async fromAccountAddress(
    connection: web3.Connection,
    address: web3.PublicKey,
    commitmentOrConfig?: web3.Commitment | web3.GetAccountInfoConfig
  ): Promise<TestVault> {
    const accountInfo = await connection.getAccountInfo(
      address,
      commitmentOrConfig
    )
    if (accountInfo == null) {
      throw new Error(`Unable to find TestVault account at ${address}`)
    }
    return TestVault.fromAccountInfo(accountInfo, 0)[0]
  }

  /**
   * Provides a {@link web3.Connection.getProgramAccounts} config builder,
   * to fetch accounts matching filters that can be specified via that builder.
   *
   * @param programId - the program that owns the accounts we are filtering
   */
  static gpaBuilder(
    programId: web3.PublicKey = new web3.PublicKey('undefined')
  ) {
    return beetSolana.GpaBuilder.fromStruct(programId, testVaultBeet)
  }

  /**
   * Deserializes the {@link TestVault} from the provided data Buffer.
   * @returns a tuple of the account data and the offset up to which the buffer was read to obtain it.
   */
  static deserialize(buf: Buffer, offset = 0): [TestVault, number] {
    return testVaultBeet.deserialize(buf, offset)
  }

  /**
   * Serializes the {@link TestVault} into a Buffer.
   * @returns a tuple of the created Buffer and the offset up to which the buffer was written to store it.
   */
  serialize(): [Buffer, number] {
    return testVaultBeet.serialize({
      accountDiscriminator: testVaultDiscriminator,
      ...this,
    })
  }

  /**
   * Returns the byteSize of a {@link Buffer} holding the serialized data of
   * {@link TestVault} for the provided args.
   *
   * @param args need to be provided since the byte size for this account
   * depends on them
   */
  static byteSize(args: TestVaultArgs) {
    const instance = TestVault.fromArgs(args)
    return testVaultBeet.toFixedFromValue({
      accountDiscriminator: testVaultDiscriminator,
      ...instance,
    }).byteSize
  }

  /**
   * Fetches the minimum balance needed to exempt an account holding
   * {@link TestVault} data from rent
   *
   * @param args need to be provided since the byte size for this account
   * depends on them
   * @param connection used to retrieve the rent exemption information
   */
  static async getMinimumBalanceForRentExemption(
    args: TestVaultArgs,
    connection: web3.Connection,
    commitment?: web3.Commitment
  ): Promise<number> {
    return connection.getMinimumBalanceForRentExemption(
      TestVault.byteSize(args),
      commitment
    )
  }

  /**
   * Returns a readable version of {@link TestVault} properties
   * and can be used to convert to JSON and/or logging
   */
  pretty() {
    return {
      myData: this.myData,
    }
  }
}

/**
 * @category Accounts
 * @category generated
 */
export const testVaultBeet = new beet.FixableBeetStruct<
  TestVault,
  TestVaultArgs & {
    accountDiscriminator: number[] /* size: 8 */
  }
>(
  [
    ['accountDiscriminator', beet.uniformFixedSizeArray(beet.u8, 8)],
    ['myData', beet.utf8String],
  ],
  TestVault.fromArgs,
  'TestVault'
)
