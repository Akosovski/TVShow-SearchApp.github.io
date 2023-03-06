const form = document.querySelector("#searchForm");
form.addEventListener('submit', async function (e) {
    e.preventDefault();
    // console.dir(form); // Show Directory for APIs
    const searchTerm = form.elements.query.value;
    console.log(searchTerm);
    const res = await axios.get(`https://api.tvmaze.com/search/shows?q=${searchTerm}`);
  
    const img = document.createElement('IMG');
    img.src = res.data[0].show.image.medium;
    document.body.append(img);
})