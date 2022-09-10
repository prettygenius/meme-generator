

document.querySelector('.form--button').addEventListener('click',showmeme)


    async function showmeme() {
    const response = await fetch('https://api.imgflip.com/get_memes')
    if (response.status !== 200) {
        throw new Error('cannot fetch the data');
    }
	const data = await response.json()
    
    const memesArray = data.data.memes
    const randomMeme = Math.floor(Math.random() * memesArray.length)
    const url = memesArray[randomMeme].url
    document.querySelector('img').src = url
    


    const input = document.querySelector('.form--input')
    document.querySelector('h2').innerHTML = input.value

}  


