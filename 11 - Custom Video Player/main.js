const player = document.querySelector('.player')
const video  = player.querySelector('video')
const progress  = player.querySelector('.progress')
const progress_filled  = player.querySelector('.progress__filled')
const toggle  = player.querySelector('.toggle')
const skip  = player.querySelectorAll('[data-skip]')
const ranges  = player.querySelectorAll('.player__slider')

function togglePlay(){
    if(video.paused){
        toggle.textContent = '❚❚'
        return video.play()
    }else{
        toggle.textContent = '►'
        return video.pause()
    }
}

function skipVideo(){
    console.log(this.dataset.skip)
    video.currentTime += Number(this.dataset.skip)
}

function handleRange(){
    video[this.name] = this.value
    console.log(this.name)
    console.log(this.value)
}

function handleProgress(){
    const persentage = (video.currentTime / video.duration) * 100 ;
    progress_filled.style.flexBasis = `${persentage}%`
}

function scrub(e){
    console.log(e.offsetX)
    console.log(progress.offsetWidth)
    const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration
    console.log(scrubTime)
    video.currentTime = scrubTime
}
video.addEventListener('click', togglePlay)
video.addEventListener('timeupdate', handleProgress)
toggle.addEventListener('click', togglePlay)
skip.forEach(button => button.addEventListener('click', skipVideo))
ranges.forEach(range => range.addEventListener('change', handleRange))
ranges.forEach(range => range.addEventListener('mousemove', handleRange))
progress.addEventListener('click', scrub)
let mousedown = false;
progress.addEventListener('mousedown', ()=> mousedown = true)
progress.addEventListener('mouseup', ()=> mousedown = false)
progress.addEventListener('mousemove', (e) => mousedown && scrub(e))