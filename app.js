const form = document.querySelector("#searchForm");
form.addEventListener('submit', async function (e) {
    e.preventDefault();
    $("#show-container").empty(); 
    const searchTerm = form.elements.query.value;
    const res = await axios.get(`https://api.tvmaze.com/search/shows?q=${searchTerm}`);
    makeImages(res.data)
})

const show_container = document.querySelector("#show-container");
const makeImages = (shows) => {
    for (let result of shows) {
        console.log(result);
        if (result.show.image) {
            const img = document.createElement('IMG');
            img.src = result.show.image.medium;
            show_container.append(img);
            img.classList.add('m-2');
        }
    }
}