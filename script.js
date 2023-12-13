document.body.addEventListener('keyup', (e) => {
    playSound(e.code.toLocaleLowerCase())
})


function playSound(sound) {
    let audioElement = document.querySelector(`#s_${sound}`)
    let keyElement = document.querySelector(`div[data-key="${sound}"]`)
    let keys = document.querySelector(`#${sound}`)

    if (audioElement) {
        audioElement.currentTime = 0
        audioElement.play();
    }

    if(keys) {
        console.log(keys)
        keys.classList.add('active')

        setTimeout(() => {
            keys.classList.remove('active')
        }, 200)
    }

    if(keys.classList.contains('prato')) {
        keys.classList.add('active2')

        setTimeout(() => {
            keys.classList.remove('active2')
        }, 200)
    }

}
