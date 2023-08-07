import React from 'react'

const Allround = () => {
    window.addEventListener("scroll", ()=>{
        const search = document.querySelector(".search")
        search.classList.toggle("active", window.scrollY > 100)
      })
  return (
    <div>
      
    </div>
  )
}

export default Allround
