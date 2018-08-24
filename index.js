document.addEventListener("DOMContentloaded", (e) => {
  // invoking a function here will make sure it happens on page load
  // your code here
  updateHTMLContent('Titanic')
const titanicButton = document.getElementById('Titanic')
const terminatorButton = document.getElementById('Terminator 2')
titanicButton.addEventListener('click', (event) => {
  // do something
  updateHTMLContent('Terminator 2')
  })
});

function updateHTMLContent(Moviename) {
let title = document.getElementById('title')
let director = document.getElementById('director')
let genre = document.getElementById('genre')
let filmrating = document.getElementById('filmrating')
let poster = document.getElementById('poster')
let decription = document.getElementById('description')
let audienceScore = document.getElementById('audienceScore')


title.innerHTML = currentMovie.title
director.innerHTML = currentMovie.director
genre.innerHTML = currentMovie.genre
filmrating.innerHTML = currentMovie.filmrating
poster.setAttribute('src', currentMovie.poster)
description.innerHTML = currentMovie.description
audienceScore.innerHTML = currentMovie.audienceScore
let castInnerHTML = "<ul>"
let actor = castMember.actor
castInnerHTML += ("<li>" + role + ": " + actor + "</li>")



for (let castmember of currentMovie.cast.length; i++) {
  let role = castmember.role
  let actor = castmember.actor
  castInnerHTML += ("<li>" + role +": " + actor + "</li>")
}
castInnerHTML += "</ul>"
cast.innerHTML = castInnerHTML
}
}

}