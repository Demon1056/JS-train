{/* <p class="loader">Loading data, please wait...</p>
<p class="error">Oops! Something went wrong! Try reloading the page!</p> */}
import SlimSelect from 'slim-select'
import axios from 'axios';
const optionsContainer = document.querySelector('.breed-select')
new SlimSelect({
  select: '.breed-select',
settings: {
    contentLocation: document.querySelector('.cat-info'),
    placeholderText: 'Select cat please',
  }
//   events: {
//     afterChange: (newVal) => {
//       console.log(newVal)
//     }}
})
const APIKEY = `live_hg8KuWL5y3BKqQVYlubdQbab8lZfSUPdfLvoYfCPlLTw0dDeFN0EMzgRus6mjaWq`
const BASEURL = 'https://api.thecatapi.com/v1'
axios.defaults.headers.common["x-api-key"] = APIKEY;
const makeMarkupOptions = (breeds)=>breeds.data.map(({name, id})=>`
<option value="${id}">${name}</option>`)
const renderOptions = (data)=> {
const htmlmarkup = data.join(" "); 
optionsContainer.insertAdjacentHTML ("beforeend", htmlmarkup)}
const getBreeds=()=>axios.get(`${BASEURL}/breeds`)
getBreeds()
.then(makeMarkupOptions)
.then(renderOptions)
.catch((error)=>console.log(error))
