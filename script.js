function searchArtist() {
    var searchValue = document.getElementById('search').value;
    var lookup = "?artist=" + searchValue;
    searchValue = searchValue.toLowerCase();
    
    if (searchValue === "") {
        document.getElementById('emptySearch').innerHTML = "Please type an artist";
    } else {
        document.getElementById('submitInfo').setAttribute("href", lookup);
    }
}