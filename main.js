//initial ratings
const ratings = {
  iphone5: 2.5,
  iphone6: 1.5,
  iphone7: 4.5,
  iphone8: 0.5,
  iphoneX: 5.0
};

// total stars
const starsTotal = 5;

//run get ratings when DOM loads
document.addEventListener("DOMContentLoaded", getRatings);

//form element
const productSelect = document.getElementById("product-select");
const ratingControl = document.getElementById("rating-control");

let product;

//product select change
productSelect.addEventListener("change", e => {
  product = e.target.value;
  //enable rating control
  ratingControl.disabled = false;

  //set ratings value each items
  ratingControl.value = ratings[product];
});

//rating control
ratingControl.addEventListener("blur", e => {
  const rating = e.target.value;

  //Make sure 5 or under
  if (rating > 5) {
    alert("Please Rating 1 - 5");
    return;
  }
  //change ratings
  ratings[product] = rating;

  getRatings();
});

//get ratings
function getRatings() {
  //loop for key and the value
  for (let rating in ratings) {
    //get percentagle from the value
    const startPercentage = (ratings[rating] / starsTotal) * 100;

    //round to nearest 10
    const startPercentageRounded = `${Math.round(startPercentage / 10) * 10}%`;

    //set width of starts inner to percentage
    document.querySelector(
      `.${rating} .stars-inner`
    ).style.width = startPercentageRounded;

    //add number rating
    document.querySelector(`.${rating} .number-rating`).innerHTML =
      ratings[rating];

    console.log(document.querySelector(`.${rating} .number-rating`));
  }
}
