document.addEventListener('DOMContentLoaded', () => {
  const nav = document.getElementById('site-menu')
  const toggle = nav.querySelector('.menu-toggle')

  const setOpen = (open) => nav.setAttribute('aria-expanded', String(open))

  toggle.addEventListener('click', () => {
    const open = nav.getAttribute('aria-expanded') === 'true'
    setOpen(!open)
  })

  document.addEventListener('click', (e) => {
    const open = nav.getAttribute('aria-expanded') === 'true'
    if (open && !nav.contains(e.target)) setOpen(false)
  })

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') setOpen(false)
  })
})
