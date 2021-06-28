function getDayName (day) {
   if (typeof day !== 'number') {
      return 'error'
   }
   

   if(day > 0 && day < 8) {
      let days = ['понедельник','вторник','среда','четверг','пятница','суббота','воскресенье']
   return days
   }

   else {
      return 'неверные данные на входе'
   }


}
 console.log(getDayName(4))