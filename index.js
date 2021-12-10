
function createEmployeeRecord(array) {
    class Employee{
        constructor(array) {
            this.firstName = array[0]
            this.familyName = array[1]
            this.title = array[2]
            this.payPerHour = array[3]
            this.timeInEvents = []
            this.timeOutEvents = []
        }
    }

    return new Employee(array)
}

function createEmployeeRecords(multyArray) {
    return multyArray.map(elm => createEmployeeRecord(elm))
}
 
function createTimeInEvent(employee, date) {

}






















const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

