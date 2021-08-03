// Test Json
// TODO: make this a JSON file or whatever
test_json = `[{
  "name":"Who Posted What",
  "link":"https://www.whopostedwhat.com",
  "desc":"Tool for searching keywords in Facebook posts.",
  "tags":["facebook","social media","search"]
},{
 "name":"Facebook Graph",
 "link":"https://graph.tips/beta/",
 "desc":"Alternative frontend to Facebook's search function.",
 "tags":["facebook","social media","search"]
},{
 "name":"FB Down",
 "link":"https://www.fbdown.net",
 "desc":"Facebook video downloader.",
 "tags":["facebook","social media","video"]
},{
 "name":"PeopleFindThor",
 "link":"https://peoplefindthor.dk",
 "desc":"Facebook people finder.",
 "tags":["facebook","social media","search"]
},{
  "name":"Marine Traffic",
  "link":"https://www.marinetraffic.com",
  "desc":"Map of Marine Traffic in real time",
  "tags":["maritime","map"]
},{
  "name":"VK",
  "link":"https://vk.com",
  "desc":"Large Russian social media",
  "tags":["social media"]
}
]
`
test_json = JSON.parse(test_json);

// Stuff to search DuckDuckGo
const searchField = document.getElementById("duck");

// This can be edited into a dict
// Allowing users to specify a search engine.
searchUrl = "https://duckduckgo.com/?q="

// If last keystroke was "Enter" treat it as search-button is clicked
searchField.addEventListener("keyup", function(event) {
	if (event.keyCode === 13) {
		event.preventDefault();
		document.getElementById("search-button").click();
	}
});
// Clear text and keep searchbar in focus
function search() {
	if (searchField.value != "") {
		let val = searchField.value;
		window.open(searchUrl + val, "_self");
	}
}

// A to Z selector - Milk

function cycleup() {
	let selector = document.querySelector('#letters');
	let selected = selector.options.selectedIndex;
	if (selected == selector.options.length - 1) selector.selectedIndex = 0;
	else selector.selectedIndex++;
}

function cycledown() {
	let selector = document.querySelector('#letters');
	let selected = selector.options.selectedIndex;
	if (selected == 0) selector.selectedIndex = selector.options.length - 1;
	else selector.selectedIndex--;
}

let terms = []
// Flo's code, but uh, milk modified it too <3
chevron_link = "https://www.purinamills.com/2.purinamills.com/media/Images/Articles/PSW_EcoCare-Feeds-Help-Reduce-Ammonia-in-Pork-Production_Tile-Image.jpg?ext=.jpg"
let start='<div class="row">'
function load_cards(letter, terms){
	for (let i=0; i < test_json.length; i++){
		let html_out = '<div class="card"><div class="v-container card-layout"><div class="h-container main-card"><div class="v-container text-rows">'
		html_out += '<a href='+test_json[i].link + '><span class="card-text">' + test_json[i].name + '</span></a>'
		html_out += '<span class="card-text description">' + test_json[i].desc + '</span>'
		html_out += '</div>'
		html_out += '<a class="card-img-wrapper" href='+test_json[i].link + '><img class="card-img" src= '+ chevron_link +'></a>'
		html_out += '</div>'
		html_out += '<div class="row">'
		for (let j=0; j < test_json[i].tags.length; j++){
			html_out += '<span>'+test_json[i].tags[j]+'</span>'
		}
		html_out += '</div></div>'
		document.getElementById('cards').innerHTML += html_out
	}
}

function loadFunctions(){
	load_cards("", "")
}
