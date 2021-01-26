const collapse = (collapseElement) => {
    if (collapseElement.controller) return collapseElement.controller
    const content = collapseElement.querySelector('.collapse__content')
    const hitarea = collapseElement.querySelector('.collapse__hitarea')
    let isOpen = collapseElement.classList.contains('.collapse_open')
    const open = () => {
        collapseElement.classList.add('collapse_open')
        content.style.height = content.scrollHeight + 'px'
        if (!isOpen) dispatchOpenEvent()
        isOpen = true
    }
    const close = () => {
        collapseElement.classList.remove('collapse_open')
        content.style.height = null
        if (isOpen) dispatchCloseEvent()
        isOpen = false
    }
    const toggle = () => {
        if (isOpen) close()
        else open()
    }
    const dispatchOpenEvent = () =>
        collapseElement.dispatchEvent(new Event('sat.collapse.open'))
    const dispatchCloseEvent = () =>
        collapseElement.dispatchEvent(new Event('sat.collapse.close'))
    hitarea.addEventListener('click', toggle)
    const instance = { open, close, toggle }
    collapseElement.controller = instance
    return instance
}
document.querySelectorAll('.collapse').forEach(collapse)
