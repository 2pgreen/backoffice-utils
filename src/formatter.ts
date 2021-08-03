import Decimal from 'decimal.js';
import { isNil } from './common';

// Format value to string with specify decimal points
/**
 * @param {(number | Decimal)}  amount - An amount in Thai baht.
 */
export function formatDecimal(
  decimalDigits: number,
  amount: number | Decimal | undefined | null,
  ) : string | undefined | null {
  if (amount == null || amount == undefined) return amount;

  const num = amount instanceof Decimal
    ? amount.toNumber() : amount

  return isNaN(num)
      ? "N/A"
      : num.toLocaleString(
        'th-TH',
        { minimumFractionDigits: decimalDigits, maximumFractionDigits: decimalDigits }
      )
}

// Format value to 2 decimal point
/**
 * @param {(number | Decimal)}  amount - An amount in Thai baht.
 */
export function formatMoney(amount: number | Decimal | undefined | null) : string | undefined | null {
  return formatDecimal(2, amount)
}

// Format value to 1 decimal point
/**
 * @param {(number | Decimal)}  amount - An amount in Thai baht.
 */
export function formatWeight(amount: number | Decimal | undefined | null) : string | undefined | null {
  return formatDecimal(1, amount)
}