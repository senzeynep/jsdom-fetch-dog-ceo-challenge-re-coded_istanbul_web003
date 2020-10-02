window.addEventListener('load', function() {
    console.log('All assets are loaded')
    fetchDogImages()
    fetchDogBreeds()
    addFiltering()
})

function addDogImages(imgUrls) {
    let dogImageContainer = document.getElementById("dog-image-container")
    imgUrls.forEach(imgUrl => {
        let imgTag = document.createElement("img")
        imgTag.src = imgUrl
        dogImageContainer.appendChild(imgTag)
    })

}

function fetchDogImages() {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
    fetch(imgUrl)
    .then(response => response.json())
    .then(jsonObject => addDogImages(jsonObject.message))
}

function fetchDogBreeds() {
    const breedUrl = 'https://dog.ceo/api/breeds/list/all'
    fetch(breedUrl)
    .then(response => response.json())
    .then(jsonObject => addDogBreeds(jsonObject.message))
}

function addDogBreeds(breeds) {
    let dogBreedsContainer = document.getElementById("dog-breeds")
    dogBreedsContainer.onclick = myEvent => {
        myEvent.target.style.color="red"
    }
    Object.keys(breeds).forEach(breed => {
        let liElement = document.createElement("li")
        liElement.innerHTML = breed
        dogBreedsContainer.appendChild(liElement)
    })

}

function addFiltering() {
    let breedDropdown = document.getElementById("breed-dropdown")
    let dogBreedsContainer = document.getElementById("dog-breeds")
    breedDropdown.onchange = myEvent => {
        let breedFirstLetter = breedDropdown.value
        for (let i=0; i<dogBreedsContainer.children.length; i++) {
            let liElement = dogBreedsContainer.children[i]
            if (liElement.innerHTML[0] == breedFirstLetter) {
                liElement.style.display = "block"
            } else {
                liElement.style.display = "none"
            }
        }
    }
}