export const isNil = (value : any) =>
    value != null && value != undefined

export const isValueExist = (value : any) =>
    !isNil(value) && value !== ''

export const compareArray = (existingArray : any[], newArray : any[]) => {
    const createArray = newArray.filter((obj) => isNil(obj.id))
    const updateArray = newArray.filter((obj) => Object.keys(obj).length > 1 && !isNil(obj.id))
    // const deleteArray = differenceBy(existingArray, newArray, 'id')
    // return {
    //     createArray,
    //     updateArray,
    //     deleteArray,
    // }
}

export const filterNullOut = (input : any) => {
    Object.keys(input)
        .filter((val: string) => !isNil(input[val]))
    return input
}

/**
 * Calculate sum of all numbers
 * @param {Array<number>}  items - An array of number.
 */
export const sum = (items: Array<number>) => items
    .reduce((acc, curr) => acc + curr, 0)