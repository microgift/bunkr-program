/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as beet from '@metaplex-foundation/beet'
export type InitBunkrData = {
  name: string
  initTime: beet.bignum
  root: number[] /* size: 32 */
  initialHash: number[] /* size: 32 */
  finalHash: number[] /* size: 32 */
  initialResetHash: number[] /* size: 32 */
  finalResetHash: number[] /* size: 32 */
  shadowDriveSpace: string
}

/**
 * @category userTypes
 * @category generated
 */
export const initBunkrDataBeet = new beet.FixableBeetArgsStruct<InitBunkrData>(
  [
    ['name', beet.utf8String],
    ['initTime', beet.u64],
    ['root', beet.uniformFixedSizeArray(beet.u8, 32)],
    ['initialHash', beet.uniformFixedSizeArray(beet.u8, 32)],
    ['finalHash', beet.uniformFixedSizeArray(beet.u8, 32)],
    ['initialResetHash', beet.uniformFixedSizeArray(beet.u8, 32)],
    ['finalResetHash', beet.uniformFixedSizeArray(beet.u8, 32)],
    ['shadowDriveSpace', beet.utf8String],
  ],
  'InitBunkrData'
)