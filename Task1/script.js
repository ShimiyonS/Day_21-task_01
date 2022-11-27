function submitButton(event){
    event.preventDefault()

    let movie_name1=document.getElementById("movie_name").value;

//let movie_name="vikram"
//document.getElementById(movie_name).value;
    let imdb=fetch(`https://www.omdbapi.com/?t=${movie_name1}&apikey=bcea3e57`);
    imdb.then((data)=>data.json()).then((data1)=>{
        console.log(data1);
    var movie_details = document.getElementById("details");
    movie_details.innerHTML= `
    <div class="card" style="max-width: 100%;
    ,height: auto;">
        <h2> GO TO BOTTOM</h2>
        <div class="card-body">
            <h3 class="card-title"><u>${data1.Title}</u></h3>
        </div>
        <P class="card-text"><b>Relesing Date   :</b>${data1.Released}</p>
        <p class="card-text"><b>Actors          :</b> ${data1.Actors}</p> 
        <p class="card-text"><b>Director        :</b> ${data1.Director} </p>
        <p class="card-text"><b>Genre           :</b> ${data1.Genre}</p>
        <p class="card-text"><b>IMDB Rating</b> :<i class="bi bi-star-fill star"></i><b>${data1.imdbRating}/10</b></p>
        <p class="card-text"><b>Languages</b>   :${data1.Language}</p>
        <img src="${data1.Poster}" class="card-img-top" alt="movie_poster">
    </div>`
});
}
