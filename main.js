//Make an api request using async await



// fetch('https://api.tvmaze.com/lookup/shows?imdb=tt0944947').then((response) => {
// 	return response.json()
// }).then((data) => {
// 	console.log(data)
// 	document.querySelector('img').src = data.image.medium
// }).catch((error) => {
// 	console.log(error)
// })


document.querySelector('.form--button').addEventListener('click',showmeme)


    async function showmeme() {
    const response = await fetch('https://api.imgflip.com/get_memes')
    if (response.status !== 200) {
        throw new Error('cannot fetch the data');
    }
	const data = await response.json()
    //console.log('resolved', data)
	//console.log(data.data.memes[0].url)
    const memesArray = data.data.memes
    const randomMeme = Math.floor(Math.random() * memesArray.length)
    const url = memesArray[randomMeme].url
    document.querySelector('img').src = url
    


    const input = document.querySelector('.form--input')
    document.querySelector('h2').innerHTML = input.value

}  

// 15 0The code in the try block is executed first, and if it throws an exception, the code in the catch block will be executed

//try test a block {} of code for errors
//catch handles the errors
//throw lets you create custom errors
//finally lets you execute code after try and catch regardless of result
