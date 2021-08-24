import React from "react";
import styled from "styled-components";

function Header() {
  return (
    <Nav>
      <Logo src="./images/logo.svg"></Logo>
      <NavMenu>
        <a href="./">
          <img src="/images/home-icon.svg" alt="" />
          <span>HOME</span>
        </a>
        <a href="#">
          <img src="/images/search-icon.svg" alt="" />
          <span>SEARCH</span>
        </a>
        <a href="#">
          <img src="/images/watchlist-icon.svg" alt="" />
          <span>WATCHLIST</span>
        </a>
        <a href="#">
          <img src="/images/original-icon.svg" alt="" />
          <span>ORIGINALS</span>
        </a>
        <a href="#">
          <img src="/images/movie-icon.svg" alt="" />
          <span>MOVIES</span>
        </a>
        <a href="#">
          <img src="/images/series-icon.svg" alt="" />
          <span>SERIES</span>
        </a>
      </NavMenu>
      <UserImg src="https://i.pinimg.com/originals/1b/b1/ce/1bb1ce18e462e082be06158d2f39dd59.jpg"></UserImg>
    </Nav>
  );
}

export default Header;

const Nav = styled.div`
  height: 70px;
  background: #090b13;
  display: flex;
  align-items: center;
  padding: 0px 36px;
  overflow-x: hidden;
`;
const Logo = styled.img`
  width: 90px;
`;
const NavMenu = styled.div`
  display: flex;
  flex: 1;
  margin-left: 25px;
  align-items: center;

  a {
    display: flex;
    align-items: center;
    padding: 0px 12px;
    text-decoration: none;

    img {
      height: 20px;
    }
    span {
      font-size: 13px;
      letter-spacing: 1.5px;
      position: relative;

      &: after {
        content: "";
        height: 2px;
        background: white;
        position: absolute;
        left: -18px;
        right: 0;
        bottom: -6px;
        transition: all 250ms cubic-bezier(1, 0.01, 0, 0.98) 0s;
        transform-origin: left;
        transform: scaleX(0);
        opacity: 0;
      }
    }
    &:hover {
      span:after {
        transform: scaleX(1);
        opacity: 1;
      }
    }
  }
`;

const UserImg = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  cursor: Pointer;
`;
