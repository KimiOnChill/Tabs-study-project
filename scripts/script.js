// just comment
//*important
//?what the fuck
//!alert
//TODO
////this is not nessasary
let container = document.querySelector(".tabs-container");
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

for (tab of allTabs){
    container.innerHTML +=` 
    <div class="tab">
      <h3 class="tab-title">${tab.title}</h3>
      <button class="tab-button"></button>
      <div class="tab-content ${tab.active ? "": "hidden"}">
        <p class="content-description">${tab.decription}</p>
      </div>
    </div>`
  ;
}


