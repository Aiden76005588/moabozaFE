import * as React from 'react'
import styled from 'styled-components'
import { setFlexStyles } from '../styles/Mixin'

function NavBar() {
  if (window.location.pathname === '/login')
    return null

 return (
    <NavBars>
      <Component>
        <MenuIcon>z</MenuIcon>
        <MenuText>메뉴</MenuText>
      </Component>
      <Component>
        <MenuIcon>z</MenuIcon>
        <MenuText>하루부자</MenuText>
      </Component>
      <Component>
        <MenuIcon>z</MenuIcon>
        <MenuText>홈</MenuText>
      </Component>
      <Component>
        <MenuIcon>z</MenuIcon>
        <MenuText>같이해부자</MenuText>
      </Component>
      <Component>
        <MenuIcon>z</MenuIcon>
        <MenuText>도전해부자</MenuText>
      </Component>
    </NavBars>
  )
}
const NavBars = styled.div`
  position:fixed;
  bottom:0px;
  width: 100%;
  max-width: 360px;
  height: 11.4vh;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
`
const Component = styled.div`
  ${setFlexStyles({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  })}
`
const MenuIcon = styled.div`
  background-color: gray;
  width: 24px;
  height: 24px;
`
const MenuText = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 10px;
  line-height: 14px;
  text-align: center;
`
export default NavBar
