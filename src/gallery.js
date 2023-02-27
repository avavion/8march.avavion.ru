class Gallery {
  $root = document.querySelector(".gallery");

  constructor() {
    if (!this.$root) {
      return false;
    }
  }

  render(data) {
    console.log(data);

    let outHTML = "";

    data.map((item, index) => {
      outHTML += `
        <div class="row ${index % 2 === 0 ? "row--left" : "row--right"}">
            <img src="${item.src}" alt="${item.date}">
            <h2>${item.date}</h2>
        </div>
        `;
    });

    this.$root.insertAdjacentHTML(`beforeend`, outHTML);
  }
}

export default new Gallery();
