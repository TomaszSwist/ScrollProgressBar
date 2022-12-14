const scrollToTopBtn = document.querySelector('button')
const root = document.querySelector(':root')

const handleScroll = () => {
	const viewBottom = window.scrollY + window.innerHeight
	const maxHeight = document.body.offsetHeight
	// const tenProcentScroll = (maxHeight - window.innerHeight) / 10
	const oneProcentScroll = (maxHeight - window.innerHeight) / 100

	if (viewBottom <= window.innerHeight) {
		root.style.setProperty('--scroll', '0%')
	// } else if (viewBottom > window.innerHeight + tenProcentScroll) {
	} else if (viewBottom > window.innerHeight + oneProcentScroll) {
		// const scrollProcent = Math.floor((viewBottom - window.innerHeight) / tenProcentScroll)
		const scrollProcent = Math.floor((viewBottom - window.innerHeight) / oneProcentScroll)
        // root.style.setProperty('--scroll', `${scrollProcent*10}%`)
        root.style.setProperty('--scroll', `${scrollProcent}%`)
        // if (viewBottom > window.innerHeight + (tenProcentScroll * 9)) {
        if (viewBottom > window.innerHeight + (oneProcentScroll * 90)) {
            scrollToTopBtn.classList.add('active')
        } else {
            scrollToTopBtn.classList.remove('active')
        }
	} 
}

const scrollToTop = () => {
    window.scroll({
        top: 0,
        behavior: 'smooth'
    })
}

window.addEventListener('scroll', handleScroll)
scrollToTopBtn.addEventListener('click', scrollToTop)
