
//Фильтрация производится через сравнения двух промежутков цен.
//Для того, чтобы курсы удовлетворяли запросу пользователя нужно, чтобы 
//Начальная цена в поиске пользователя была не больше максимальной цены курсов, которые представляются в стране, а конечная цена поиска пользователя была не меньше начальной цены курсов в стране только тогда курсы определенной страны будут удовлетворять требованиям поиска пользователя 

// Список курсов
let courses = [
   { name: "Courses in England", prices: [0, 100] },
   { name: "Courses in Germany", prices: [500, null] },
   { name: "Courses in Italy", prices: [100, 200] },
   { name: "Courses in Russia", prices: [null, 400] },
   { name: "Courses in China", prices: [50, 250] },
   { name: "Courses in USA", prices: [200, null] },
   { name: "Courses in Kazakhstan", prices: [56, 324] },
   { name: "Courses in France", prices: [null, null] },
];

// Варианты цен (фильтры), которые ищет пользователь
let requiredRange1 = [null, 200];
let requiredRange2 = [100, 350];
let requiredRange3 = [200, null];

let sortCourses = (courses, sort) => {
   let suitableCourses = [];
   const valueAdjustment = (sort) => {
      if (sort[0] === null) {
         sort[0] = 0;
      } else if (sort[1] === null) {
         sort[1] = Infinity;
      }
   }
   valueAdjustment(sort);
   for (let c = 0; c < courses.length; ++c) {
      let coursePrice = courses[c].prices;
      valueAdjustment(coursePrice)
      if (coursePrice[0] <= sort[1] && coursePrice[1] >= sort[0]) {
         suitableCourses.push(courses[c].name);
      }
   }
   return console.log(suitableCourses);
}

sortCourses(courses, requiredRange1)//['Courses in England', 'Courses in Italy', 'Courses in Russia', 'Courses in China', 'Courses in USA', 'Courses in Kazakhstan', 'Courses in France']
sortCourses(courses, requiredRange2)//['Courses in England', 'Courses in Italy', 'Courses in Russia', 'Courses in China', 'Courses in USA', 'Courses in Kazakhstan']
sortCourses(courses, requiredRange3)//['Courses in Germany', 'Courses in Italy', 'Courses in Russia', 'Courses in China', 'Courses in USA', 'Courses in Kazakhstan']
