export interface Student {
    name : string,
    marks : {
        maths : number,
        english : 21,
        science : 45
    },
    rollNumber : string
}

export interface StudentResult {
    name : string,
    status : string,
    rollNumber : string,
    totalMarks : number
}