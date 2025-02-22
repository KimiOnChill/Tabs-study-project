// just comment
//*important
//?what the fuck
//!alert
//TODO
////this is not nessasary

let container = document.querySelector(".tabs-container");
let button = document.querySelector(".tab-button");
//default input of 6 tabs
let input = {
  tabs : [
    {
      title: "Title 1",
      description: "Article 1",
      active: true
    },
    {
      title: "Title 2",
      description: "Article 2",
      active: true
    },
    {
      title: "Title 3",
      description: "Article3"
    },
    {
      title: "Title 4",
      description: "Article 4",
      active: false
    },
    {
      title: "Title 5",
      description: "Article 5",
      active: false
    },
    {
      title: "Title 6",
      description: "Article 6"
    }
  ]
};

const allTabs = input.tabs;

for (const tab of allTabs){
    container.innerHTML +=` 
    <div class="tab">
      <h3 class="tab-title">${tab.title}</h3>
      <button class="tab-button">Toggle</button>
      <div class="tab-content ${tab.active ? "": "hidden"}">
        <p class="content-description">${tab.description}</p>
      </div>
    </div>`
  ;
}

/*
funtion that will close every tab exept one
function checkOpen () {
  let arrToCheck=[];
  for (const tab of allTabs){
    tab.active ? arrToCheck.push(1) : arrToCheck.push(0);

  }
}
*/

window.onload = function() {
  const buttons = document.querySelectorAll(".tab-button");
  buttons.forEach((button, index) => {
    button.addEventListener("click", () => {
      document.querySelectorAll(".tab-content")[index].classList.toggle("hidden");
    });
  });
  // checkOpen();
}


