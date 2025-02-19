const catalog = [
  {
    name: "Nike Air Max 90",
    price: "80$",
    img: 0,
  },
  {
    name: "Nike Air Force 1",
    price: "90$",
    img: 1,
  },
  {
    name: "Nike Dunk Low",
    price: "100$",
    img: 2,
  },
  {
    name: "Nike Air Jordan 1",
    price: "110$",
    img: 3,
  },
  {
    name: "Nike Blazer Mid 77",
    price: "75$",
    img: 4,
  },
  {
    name: "Nike ZoomX Vaporify Next%",
    price: "150$",
    img: 5,
  },
  {
    name: "Nike Pegasus 40",
    price: "65$",
    img: 6,
  },
  {
    name: "Nike React Infinity Run Flyknit",
    price: "85$",
    img: 7,
  },
  {
    name: "Nike SB Dunk",
    price: "95$",
    img: 8,
  },
  {
    name: "Nike Lebron 21",
    price: "120$",
    img: 9,
  },
];
var basket = [];

function fillArray(arr) {
  const shop = document.getElementById("catalog");
  shop.innerHTML = "";
  if (arr.length == 0) {
    const h1 = document.createElement("H1");
    h1.innerHTML = `<h1 class="noRes">No results</h1>`;
    shop.appendChild(h1);
  } else {
    arr.forEach((element, index) => {
      const div = document.createElement("div");
      div.innerHTML = `<img src="img${element.img}.png" alt="#" /> <p>${element.name}</p> <p>${element.price}</p> <button onclick="addInBasket(${element.img})" class="addIn">Add to Bag</button>`;
      shop.appendChild(div);
    });
  }
}
fillArray(catalog);

document.getElementById("lupe").addEventListener("click", () => {
  fillArray(catalog);
});

document
  .getElementById("searcher")
  .addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      const p = document.getElementById("searcher");
      const word = p.value;
      searcher(catalog, word);
      p.value = "";
    }
  });

function searcher(arr, word) {
  const filtered = arr.filter((item) => {
    if (item.name.search(word) != -1 || item.price.search(word) != -1) {
      return item;
    }
  });
  fillArray(filtered);
}

function addInBasket(index) {
  var isRepeating = false;
  basket.filter((item) => {
    if (item.img == catalog[index].img) {
      isRepeating = true;
    }
  });
  if (!isRepeating) {
    basket.push(catalog[index]);
  }
  basketNum();
}

function showBasket() {
  const shop = document.getElementById("catalog");
  shop.innerHTML = "";
  if (basket.length == 0) {
    const h1 = document.createElement("H1");
    h1.innerHTML = `<h1 class="empty">Your Basket are empty</h1>`;
    shop.appendChild(h1);
  }
  basket.forEach((element, index) => {
    const div = document.createElement("div");
    div.innerHTML = `<img src="img${element.img}.png" alt="#" /> <p>${element.name}</p> <p>${element.price}</p> <button onclick="remove(${index})" class="addIn">Remove</button>`;
    shop.appendChild(div);
  });
}

function remove(index) {
  basket.splice(index, 1);
  showBasket();
  basketNum();
}

function basketNum() {
  var numbersInBasket = document.getElementById("numS");
  if (basket.length == 0) {
    numbersInBasket.innerHTML = "";
    numbersInBasket.classList.remove("numsInBasket");
  } else {
    numbersInBasket.innerHTML = `${basket.length}`;
    numbersInBasket.classList.add("numsInBasket");
  }
}
