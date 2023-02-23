let btn = document.querySelector("#btn");
let sidebar = document.querySelector(".sidbar");
let searchBtn = document.querySelector(".img");

btn.onclick = function() {
    sidebar.classList.toggle("active");
}
searchBtn.onclick = function() {
    sidebar.classList.toggle("active");
}

document.querySelector("#search-input");
addEventListener('input', FilterList);
function FilterList(){
    const searchInput = document.querySelector('#search-input');
    const filter = searchInput.value.toLowerCase();
    const listItem = document.querySelectorAll('.list-search');
    listItem.forEach((item) =>{
        let text = item.textContent;
        if(text.toLocaleLowerCase().includes(filter.toLocaleLowerCase())){
            item.style.display = '';
        } else{ 
            item.style.display = 'none';
        }
    });

}