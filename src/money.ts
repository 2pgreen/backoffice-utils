import { Decimal } from 'decimal.js';

/**
 * Zero value in decimal type
 * @type {Decimal}
 */
export const zero: Decimal = new Decimal(0)

/**
 * Thai VAT in decimal value, current value is 0.07
 * @type {Decimal}
 */
export const vatRatio: (Decimal) = new Decimal('0.07')

// Calculate VAT from VAT exluded amount
/**
 * @param {(number | Decimal)}  amount - An amount in Thai baht.
 */
export function calculateVat(amount : number | Decimal) {
    return vatRatio.mul(amount)
}

// Extract VAT from VAT included amount
/**
 * @param {(number | Decimal)}  amount - An amount in Thai baht.
 */
export function extractVat(amount : number | Decimal) {
  return zero.add(amount).mul(7).div(107)
}