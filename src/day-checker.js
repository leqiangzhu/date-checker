export class DayCalculator { 
   constructor (year,month,day) {
    this.day = day;
    this.year = year;
    this.month = month;
            }



        GetMaxDay() {
        var maxDay=0;
        if ((this.month === 2) &&((this.year % 4 === 0) && (this.year % 100 !== 0) || (this.year % 400 === 0))) {
            maxDay = 29;
        } else {
            switch (this.month) {
                case 1:
                maxDay = 31;
                    break;
                case 2:
                maxDay = 28;
                    break;
                case 3:
                maxDay = 31;
                    break;
                case 4:
                maxDay = 30;
                    break;
                case 5:
                maxDay = 31;
                    break;
                case 6:
                maxDay = 30;
                    break;
                case 7:
                maxDay = 31;
                    break;
                case 8:
                maxDay = 31;
                     break;
                case 9:
                maxDay = 30;
                    break;
                case 10:
                maxDay = 31;
                    break;
                case 11:
                maxDay = 30;
                    break;
                case 12:
                maxDay = 31;
                    break;
        }
    }
        return maxDay;
        }


        
    DayChecker(){
        var days =  [  "Thursday", "Friday", "Saturday","Sunday" ,"Monday", "Tuesday", "Wednesday"];
        var date =new Date (Date.UTC(this.year,this.month,this.day));
        var dayGetByCode =days[date.getDay()];
        return dayGetByCode;
    
    }


}






    

