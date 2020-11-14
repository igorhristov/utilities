import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Layout from "../../../../components/layouts/layout"

const DropDownComponent = ({ className }) => {
  return (
    <Layout>
      <div className={className}>
        <div className="box">
          <ul className="box-list">
            <Link to="#" className="list-header">
              Choose &nbsp; &#9776;
            </Link>
            <li className="list-item-1">
              <Link to="#">HTML Elements</Link>
            </li>
            <li className="list-item-2">
              <Link to="#">JavaScript Elements</Link>
            </li>
            <li className="list-item-3">
              <Link to="#">React Elements</Link>
            </li>
            <li className="list-item-4">
              <Link to="#">Gatsby Elements</Link>
            </li>
            <li className="list-item-5">
              <Link to="#">CMS Elements</Link>
            </li>
          </ul>
        </div>
      </div>
    </Layout>
  )
}

export default styled(DropDownComponent)`
  margin: 0 auto;
  height: 100vh;
  background: #2fb8f7;
  padding: 0;
  overflow: hidden;
  background-color: #2fb8f7;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 800 800'%3E%3Cdefs%3E%3CradialGradient id='a' cx='400' cy='400' r='50%25' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%232fb8f7'/%3E%3Cstop offset='1' stop-color='%232cace6'/%3E%3C/radialGradient%3E%3CradialGradient id='b' cx='400' cy='400' r='70%25' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%232fb8f7'/%3E%3Cstop offset='1' stop-color='%232fb8f7'/%3E%3C/radialGradient%3E%3C/defs%3E%3Crect fill='url(%23a)' width='800' height='800'/%3E%3Cg fill-opacity='.8'%3E%3Cpath fill='url(%23b)' d='M998.7 439.2c1.7-26.5 1.7-52.7 0.1-78.5L401 399.9c0 0 0-0.1 0-0.1l587.6-116.9c-5.1-25.9-11.9-51.2-20.3-75.8L400.9 399.7c0 0 0-0.1 0-0.1l537.3-265c-11.6-23.5-24.8-46.2-39.3-67.9L400.8 399.5c0 0 0-0.1-0.1-0.1l450.4-395c-17.3-19.7-35.8-38.2-55.5-55.5l-395 450.4c0 0-0.1 0-0.1-0.1L733.4-99c-21.7-14.5-44.4-27.6-68-39.3l-265 537.4c0 0-0.1 0-0.1 0l192.6-567.4c-24.6-8.3-49.9-15.1-75.8-20.2L400.2 399c0 0-0.1 0-0.1 0l39.2-597.7c-26.5-1.7-52.7-1.7-78.5-0.1L399.9 399c0 0-0.1 0-0.1 0L282.9-188.6c-25.9 5.1-51.2 11.9-75.8 20.3l192.6 567.4c0 0-0.1 0-0.1 0l-265-537.3c-23.5 11.6-46.2 24.8-67.9 39.3l332.8 498.1c0 0-0.1 0-0.1 0.1L4.4-51.1C-15.3-33.9-33.8-15.3-51.1 4.4l450.4 395c0 0 0 0.1-0.1 0.1L-99 66.6c-14.5 21.7-27.6 44.4-39.3 68l537.4 265c0 0 0 0.1 0 0.1l-567.4-192.6c-8.3 24.6-15.1 49.9-20.2 75.8L399 399.8c0 0 0 0.1 0 0.1l-597.7-39.2c-1.7 26.5-1.7 52.7-0.1 78.5L399 400.1c0 0 0 0.1 0 0.1l-587.6 116.9c5.1 25.9 11.9 51.2 20.3 75.8l567.4-192.6c0 0 0 0.1 0 0.1l-537.3 265c11.6 23.5 24.8 46.2 39.3 67.9l498.1-332.8c0 0 0 0.1 0.1 0.1l-450.4 395c17.3 19.7 35.8 38.2 55.5 55.5l395-450.4c0 0 0.1 0 0.1 0.1L66.6 899c21.7 14.5 44.4 27.6 68 39.3l265-537.4c0 0 0.1 0 0.1 0L207.1 968.3c24.6 8.3 49.9 15.1 75.8 20.2L399.8 401c0 0 0.1 0 0.1 0l-39.2 597.7c26.5 1.7 52.7 1.7 78.5 0.1L400.1 401c0 0 0.1 0 0.1 0l116.9 587.6c25.9-5.1 51.2-11.9 75.8-20.3L400.3 400.9c0 0 0.1 0 0.1 0l265 537.3c23.5-11.6 46.2-24.8 67.9-39.3L400.5 400.8c0 0 0.1 0 0.1-0.1l395 450.4c19.7-17.3 38.2-35.8 55.5-55.5l-450.4-395c0 0 0-0.1 0.1-0.1L899 733.4c14.5-21.7 27.6-44.4 39.3-68l-537.4-265c0 0 0-0.1 0-0.1l567.4 192.6c8.3-24.6 15.1-49.9 20.2-75.8L401 400.2c0 0 0-0.1 0-0.1L998.7 439.2z'/%3E%3C/g%3E%3C/svg%3E");
  background-attachment: fixed;
  background-size: cover;
  .box {
    margin: 50px auto 0;
  }

  /* .box {
    position: absolute;
    top: 15%;
    left: 50%;
    transform: translate(-50%, -50%);
  } */

  a {
    display: block;
    text-decoration: none;
    width: 100%;
    height: 100%;
    color: #fff;
    text-transform: uppercase;
    letter-spacing: 2px;
  }

  a:hover {
    color: #fff;
    background: #dc244e;
  }

  .box-list {
    list-style: none;
    padding: 0;
    width: 300px;
    height: 60px;
    margin: 20px auto;
    background: #dc244e;
  }

  .box-list a.list-header {
    display: block;
    height: 60px;
    text-align: center;
    text-decoration: none;
    color: #fff;
    transition: 0.2s ease-in-out;
    line-height: 58px;
    font-weight: 900;
    text-transform: uppercase;
    letter-spacing: 2px;
  }

  .box-list li {
    width: 300px;
    height: 60px;
    background: #000;
    color: #fff;
    text-align: center;
    margin: 0;
    transform-origin: 50% 0%;
    transform: perspective(350px) rotateX(-90deg);
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
    line-height: 58px;
  }

  .box-list:hover li {
    transform: perspective(350px) rotateX(0deg);
    transition: 0.2s linear 0s;
  }

  .box-list:hover .list-item-2 {
    transition-delay: 0.2s;
  }
  .box-list:hover .list-item-3 {
    transition-delay: 0.4s;
  }
  .box-list:hover .list-item-4 {
    transition-delay: 0.6s;
  }
  .box-list:hover .list-item-5 {
    transition-delay: 0.8s;
  }
  .box-list:hover .list-item-6 {
    transition-delay: 1s;
  }
`