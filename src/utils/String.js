import Constants from './Constants'

export const convertNumberToString = (value, delimiter = ',') => {
    if (value || value === 0) {
        return value.toString().replace(Constants.REGEX.formatMoney, delimiter)
    }
    return '0'
}

export function formatCash (stringMoney) {
    const delimiter = ','
    if (stringMoney.length !== 0) {
        return stringMoney
            .split('')
            .reverse()
            .reduce(
                (prev, next, index) =>
                    (index % 3 ? next : `${next}${delimiter}`) + prev,
            )
    }
    return null
}

export const convertStringMoneyToNumber = (value) => {
    try {
        if (value) {
            return Number.parseInt(value.replace(/,/g, ''), 10)
        }
        return 0
    } catch (error) {
        return 0
    }
}