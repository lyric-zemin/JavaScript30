const playerVideo = document.querySelector('.player__video')
// 进度条容器
const progress = document.querySelector('.progress')
// 进度条
const progressFilled = document.querySelector('.progress__filled')
// 播放切换
const playerToggle = document.querySelector('.toggle')
// 音量
const playerVolume = document.querySelector('[name="volume"]')
// 播放速率
const playbackRate = document.querySelector('[name="playbackRate"]')
// 快进快退
const playerSkips = document.querySelectorAll('[data-skip]')

// 播放进度事件
playerVideo.addEventListener('timeupdate', () => {
  const percentage = Math.min(
    (playerVideo.currentTime / playerVideo.duration) * 100,
    100
  )
  progressFilled.style.width = percentage + '%'
  progressFilled.style.flexBasis = percentage + '%'
})
// 播放事件
playerVideo.addEventListener('play', () => {
  playerToggle.innerText = '❚ ❚'
})
// 暂停事件
playerVideo.addEventListener('pause', () => {
  playerToggle.innerText = '►'
})
// 播放暂停控制
playerToggle.addEventListener('click', () => {
  playerVideo.paused ? playerVideo.play() : playerVideo.pause()
})
// 音量控制
// playerVolume.addEventListener('change', evt => {
//   playerVideo.volume = evt.target.value
// })

let dragging = false
progress.addEventListener('mousedown', () => (dragging = true))
progress.addEventListener('mouseup', () => (dragging = false))
progress.addEventListener('mousemove', e => {
  if (!dragging) return
  playerVideo.currentTime =
    (e.offsetX / progress.offsetWidth) * playerVideo.duration
})
