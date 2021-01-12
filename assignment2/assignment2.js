// when window loads, call bindEelments and it will bind functions with whichever elements we want.
window.addEventListener('load', bindElements);

let searchQueries = [];

const adjustBorders = () => {
    if(searchQueries.length !== 0){
        document.querySelector('.search-bar').style.borderRadius = '10px';
    }
}

const removeSearchHistory = () => {
    document.querySelector('.search-bar').style.borderRadius = '20px';
    document.querySelector('.search-history').innerHTML = '';
}

const storeSearchValue = function (event) {
    const searchQuery = document.getElementById('inputField').value;
    // keyCode has been deprecated.
    if (event.code === "Enter") {
        console.log("Query: ", searchQuery);
        searchQueries.push(searchQuery);
        document.getElementById('inputField').value = '';
        document.getElementById('inputField').blur();           // remove focus from input field
    }
    // remove old search history
    removeSearchHistory();
}


const showSuggestions = function(){
    // remove existing search history item
    removeSearchHistory();
    const searchHistory = document.querySelector('.search-history');
    searchQueries.forEach(query => {
        const html = `<div class='search-history-item'>${query}</div>    
        `;
        searchHistory.insertAdjacentHTML('afterbegin', html);
    });
    console.log(searchQueries);
}

function bindElements() {
    //console.log(`Binding..............`);
    document.getElementById('inputField').addEventListener('keyup', storeSearchValue);
    document.getElementById('inputField').addEventListener('focus', showSuggestions);
    document.getElementById('inputField').addEventListener('blur', removeSearchHistory);
    document.getElementById('inputField').addEventListener('click', adjustBorders);
    document.querySelector('#inputField').addEventListener('')
}
