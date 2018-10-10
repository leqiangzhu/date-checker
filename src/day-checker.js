export class DayCalculator { 
   constructor (year,month,day) {
    this.day = day;
    this.year = year;
    this.month = month;
            }
    CheckLeapYear() {
        if ((this.year % 4 === 0) && (this.year % 100 !== 0) || (this.year % 400 === 0)) {
            return true;
        } else {
            return false;
        }
        }

    DayChecker(){
        var days =  [  "Thursday", "Friday", "Saturday","Sunday" ,"Monday", "Tuesday", "Wednesday"];
        var date =new Date (this.year,this.month,this.day);
        return days[date.getDay()];
    }

}






    

