const handleMobileMemu = () => {
  const disableScroll = () => {
    document.body.style.overflow = 'hidden'
  }

  const enableScroll = () => {
    document.body.style.overflow = ''
  }
  const mobileMenu = document.getElementById('mobile-menu')
  const openMenu = document.getElementById('open_nav')
  const closeMenu = document.getElementById('close_nav')

  openMenu.onclick = () => {
    mobileMenu.hidden = false
    disableScroll()
  }

  closeMenu.onclick = () => {
    mobileMenu.hidden = true
    enableScroll()
  }
}

export default handleMobileMemu
