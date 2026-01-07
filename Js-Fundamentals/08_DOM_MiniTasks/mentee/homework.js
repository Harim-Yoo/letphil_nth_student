// DOM HOMEWORK – FAVORITE MOVIES
// ----------------------------------------------
// GOAL: Practice selectors, textContent, and creating/removing elements.


const moviesTitle = document.getElementById('moviesTitle');
const moviesInfo = document.getElementById('moviesInfo');
const moviesList = document.getElementById('moviesList');

/*For Extra Fun */

const moviesArray = ['Jurrasic Park','Interstellar',"Zootopia"];

moviesArray.forEach((item) => {
    const li = document.createElement('li');
    li.textContent = item;
    li.classList.add("movie-item");
    moviesList.appendChild(li);
});

moviesTitle.textContent = "Wave 7 Movie List";

const movieCount = moviesList.children.length;

/*For extra fun* const movieCount_v2 = document.querySelectorAll(".movie-item").length; This is way too long to read...*/

moviesInfo.textContent = `You current have ${movieCount} favorite movies in your list.`;

const newList = document.createElement('li');
newList.textContent = "Golden";
newList.classList.add("movie-item");
moviesList.appendChild(newList);

const newMoviecount = moviesList.children.length;

moviesInfo.textContent = `You current have ${newMoviecount} favorite movies in your list.`;

const randomIndex = Math.floor(Math.random() * newMoviecount);
const randomMovieToDelete = document.querySelectorAll('.movie-item')[randomIndex];
randomMovieToDelete.remove();

const newnewMovieCount = moviesList.children.length;
moviesInfo.textContent = `You current have ${newnewMovieCount} favorite movies in your list.`;


/* FOR THE OPTIONAL PART:

I can see why this is in the homework. Unless you change the DOM directly, this won't change the screen. Vanilla JS might be fast enough to change things directly, but they don't reload it for us, unfortunately. NO AUTOMATIC RELOADING.

This might be why we can pull it off better at React or Next.js because they use virtual DOM to print this right away. I learned that Vanilla JS is fastest, but for more interactiveness, why not React? Of course, Vanilla JS is cool to see that we can change each thing at a time. 

I have practiced React / Next.js over the christmas break for some time, and this is how I would write down the component for <ul/> part. Didn't write down tailwind, but still it's cool to see that useState would be a good thing in this situation.

--------------------------------------------------------------------------------------------------------------

'use client'

import { useState } from 'react';

type MovieList = string[] // you can write interface, too. I prefer type for no reason. 

const MovieChecker = () => {

    const [movieList, setMovieList] = useState<MovieList>(['Jurrasic Park','Interstellar',"Zootopia"])
    
    const addMovie = () => {
        setMovieList([...movieList,"Golden"])}
    }
    return (
        <div>
            <ul className="movie-list">
                {movieList.map((item,idx) => (
                    <li key={idx} className = "movie-item">
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    )

export default MovieChecker;

--------------------------------------------------------------------------------------------------------------

AND put this component in the parent part. Yay!! */











