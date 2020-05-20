/*-----------------------------------------APOD---------------------------------------*/
const url = "https://api.nasa.gov/planetary/apod?api_key=IQV1GccHctTgWwkiDU39o7k6tWhAP3Hy0NxIGX9M";
fetch(url)
  .then((response) => response.json())
  .then(insertIntoDOM)
  .catch((error) => console.error("Encountered error:", error));

function insertIntoDOM({ title, explanation, url }) {
  const containerDiv = document.querySelector("#dailyImage");
  const fragment = document.createDocumentFragment();
  const imgEl = document.createElement("img");
  const titleEl = document.createElement("h1");
  const explanationEl = document.createElement("p");

  imgEl.src = url;
  titleEl.innerText = title;
  explanationEl.innerText = explanation;

  fragment.appendChild(imgEl);
  fragment.appendChild(titleEl);
  fragment.appendChild(explanationEl);

  containerDiv.appendChild(fragment);
}
