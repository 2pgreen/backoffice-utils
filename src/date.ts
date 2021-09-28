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