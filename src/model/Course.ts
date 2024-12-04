class Course {
    id: number
    title: string
    preRequisiteID: number

    constructor(id: number, title: string, preRequisiteID: number) {
        this.id = id
        this.title = title
        this.preRequisiteID = preRequisiteID
    }
}

export default Course