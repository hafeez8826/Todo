class TodoModel{
    rowNumber: number;
    rowDescription: string;
    rowAssigned: string;

    constructor(theNumber: number, theDescription: string, theAssigned: string){
        this.rowNumber = theNumber;
        this.rowDescription = theDescription;
        this.rowAssigned = theAssigned;
    }
}