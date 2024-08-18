


const generateButton = document.getElementById('generate-quote');
const quoteDiv = document.getElementById('quote');
const author = document.getElementById('author');
const errorMessage = "Something went wrong"

const loadingState = () => {
    quoteDiv.innerHTML = "Loading..."
    generateButton.innerHTML = "Loading..."
}


generateButton.addEventListener("click", () => {
    location.reload();
})



const getQuote = async () => {
    loadingState()

    try {

        const proxyUrl = "https://api.allorigins.win/get?url=";
        const apiUrl = "http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json";

        const response = await fetch(proxyUrl + encodeURIComponent(apiUrl));
        const data = await response.json();
        const jsonData = JSON.parse(data.contents)

        quoteDiv.innerHTML = " ' " + jsonData.quoteText + " ' "
        author.innerHTML = jsonData.quoteAuthor
        generateButton.innerHTML = "Generate Quote"

    } catch (error) {
        quoteDiv.innerHTML = errorMessage
        generateButton.innerHTML = "Generate Quote"
    }
}

getQuote()
