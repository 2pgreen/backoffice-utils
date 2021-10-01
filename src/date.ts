interface Month {
    no: number
    name: string
    thaiFullName: String
}

/**
 * List of months in calendar
 * @type {Month[]}
 */
export const Months : Month[] = [
    { no: 1, name: "JAN", thaiFullName: "มกราคม" },
    { no: 2, name: "FEB", thaiFullName: "กุมภาพันธ์" },
    { no: 3, name: "MAR", thaiFullName: "มีนาคม" },
    { no: 4, name: "APR", thaiFullName: "เมษายน" },
    { no: 5, name: "MAY", thaiFullName: "พฤษภาคม" },
    { no: 6, name: "JUN", thaiFullName: "มิถุนายน" },
    { no: 7, name: "JUL", thaiFullName: "กรกฎาคม" },
    { no: 8, name: "AUG", thaiFullName: "สิงหาคม" },
    { no: 9, name: "SEP", thaiFullName: "กันยายน" },
    { no: 10, name: "OCT", thaiFullName: "ตุลาคม" },
    { no: 11, name: "NOV", thaiFullName: "พฤศจิกายน" },
    { no: 12, name: "DEC", thaiFullName: "ธันวาคม" },
]

export function getCurrentYear() : number {
    return (new Date()).getFullYear()
}

/**
 * Start year of this backoffice system
 */
export const startYear: number = 2021

/**
 * Get a list of years from 2021 to present year
 * @return {number[]}
 */
export function getYearList() : Array<number> {
    const currentYear = getCurrentYear()
    const numberOfYear = currentYear - startYear + 1
    const yearList = []

    for(let i = 0; i < numberOfYear; i++)
        yearList.push(startYear + i)
    return yearList;
}