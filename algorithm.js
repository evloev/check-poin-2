function getDayName (day) {
   if (typeof day !== 'number') {
      return 'error'
   }
   

   if(day > 0 && day < 8) {
      return 'все верно'
   }

   else {
      return 'неверные данные на входе'
   }


}
 console.log(getDayName(5))