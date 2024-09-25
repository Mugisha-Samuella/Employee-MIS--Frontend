import React from 'react'

const Header = ({toggleModal, numberOfEmployees}) => {
  return (
   <header className='header'>
      <div className='container'>
        <h1>Employee List ({numberOfEmployees})</h1>
        <button onClick={()=> toggleModal(true)} className='btn'>
            <i className='bi bi-plus-square'></i> Add new Employee
        </button>
      </div>
   </header>
  )
}

export default Header
