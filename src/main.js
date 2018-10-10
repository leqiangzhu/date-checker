import { DayCalculator } from './day-checker';
import './styles.css';




$(document).ready(function() {
  $('#day-checker').submit(function(event) {
    event.preventDefault();
    let year = parseInt($('#year').val());
    let month = parseInt($('#month').val());
    let day = parseInt($('#day').val());
    console.log(year+"---"+month+day);

    let daydate =new  DayCalculator (year,month,day);
    let result = daydate.DayChecker();
    $('#result').text(result);
    
    });
  });

