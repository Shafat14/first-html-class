function celsiusToFahrenheit(celsius) {
    return (9 * celsius / 5) + 32;
}


var temperatureCelsius = 38;
var temperatureFahrenheit = celsiusToFahrenheit(temperatureCelsius);

console.log(temperatureCelsius + "°C = " + temperatureFahrenheit + "°F");

function celsiusToFahrenheit(celsius) {
    return (9 * celsius / 5) + 32;
}


var temperatureCelsius = 24;
var temperatureFahrenheit = celsiusToFahrenheit(temperatureCelsius);

console.log(temperatureCelsius + "°C = " + temperatureFahrenheit + "°F");

function celsiusToFahrenheit(celsius) {
    return (9 * celsius / 5) + 32;
}


var temperatureCelsius = -1;
var temperatureFahrenheit = celsiusToFahrenheit(temperatureCelsius);

console.log(temperatureCelsius + "°C = " + temperatureFahrenheit + "°F");






var classification = [ "John Hill", "Mary Jane", "Gary Vee", "Paricia Mills", "Helen Hall", "Paul Green" ];


var topThreeStudents = classification.slice(-3);


var listElement = document.getElementById('top-students-list');

topThreeStudents.forEach(function(student) {
    var listItem = document.createElement('li');
    listItem.textContent = student;
    listElement.appendChild(listItem);
});







var course = {
    'title': "Learn to Code in Python 3",
    'categories': ['programming', 'technology', 'python'],
    '5_stars_reviews': 420,
    '4_stars_reviews': 80,
    '3_stars_reviews': 33,
    '2_stars_reviews': 20,
    '1_stars_reviews': 4
};


document.getElementById('course-title').textContent = "Course title: " + course.title;


var mainCategory = course.categories[0];
document.getElementById('main-category').textContent = "Main Category: " + mainCategory;


function calculatePercentageOfFiveStarsReviews(course) {
    var totalReviews = course['5_stars_reviews'] +
                       course['4_stars_reviews'] +
                       course['3_stars_reviews'] +
                       course['2_stars_reviews'] +
                       course['1_stars_reviews'];
    var percentage = (course['5_stars_reviews'] / totalReviews) * 100;
    return Math.round(percentage); 
}


var percentageOfFiveStarsReviews = calculatePercentageOfFiveStarsReviews(course);
document.getElementById('percentage-reviews').textContent = "Percentage of 5 stars reviews: " + percentageOfFiveStarsReviews + "%";








var shoppingList = ["Milk", "Butter", "Juice", "Bread", "Beer", "Rice", "Potatoes", "Chocolate"];


var lastItem = shoppingList.pop(); 
shoppingList.unshift(lastItem);   


shoppingList.push("Cheese");
shoppingList.push("Eggs");


console.log("Updated shopping list:", shoppingList);



