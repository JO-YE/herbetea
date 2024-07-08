import React from 'react'
import Logo from './logo';
import Navlist from './nav'

const Header = () => {
  return (
    <div>
      <Logo />
      <hr className=" lgh-[0px] my-0 py-0 border border-zinc-300" />
      <Navlist />
    </div>
  )
}

export default Header
