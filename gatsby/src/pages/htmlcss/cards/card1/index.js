import React from "react"
import { FaFacebook } from "react-icons/fa"
import Layout from "../../../../components/layouts/layout"

import styled from "styled-components"

const card1 = () => {
  return (
    <Layout>
      <CardWrapper>
        <div className="container">
          <div className="cards-wrapper">
            <div className="card">
            
          <img src="https://cdna.artstation.com/p/assets/images/images/000/258/566/large/philip-straub-rivendall-final.jpg?1413766630" alt="" class="image-top"/>

              <img
                src="https://cnet1.cbsistatic.com/img/ASs8fPO24m_PuIO4ErAaCrfdKy0=/2014/12/01/89601d70-ca65-4dc7-adfe-f6dbd46d05ba/hobbit-lotr-5-armies-gandalf-hat.jpg"
                alt=""
                className="profile-image"
              />
              <h1 className="fullname">Gandalf The White</h1>
              <p className="job">Wizard</p>
              <p className="about-me">
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe
                ab, nam quibusdam quod ipsa et est, distinctio, deserunt nulla
                adipisci incidunt magnam doloribus, architecto obcaecati quasi
                totam. Cum, officiis maxime!"
              </p>
              <button type="button">Explore Me</button>
              <ul className="social-icons">
                <li>
                  <a href="https://google.com">
                    <i className="fab fa-facebook-f">
                      <FaFacebook />
                    </i>
                  </a>
                </li>
                <li>
                  <a href="https://google.com">
                    <i className="fab fa-facebook-f">
                      <FaFacebook />
                    </i>
                  </a>
                </li>
                <li>
                  <a href="https://google.com">
                    <i className="fab fa-facebook-f">
                      <FaFacebook />
                    </i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </CardWrapper>
    </Layout>
  )
}

const CardWrapper = styled.article`
  min-height: 80vh;
  .cards-wrapper {
    width: 80%;
    display: flex;
    justify-content: space-evenly;
    position: relative;
    top: 35%;
    left: 50%;
    transform: translateX(-50%);
    margin: 4rem 0;
  }

  .card {
    width: 280px;
    background-color: #eee;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    transition: transform 0.5s;
    box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.4);
  }

  @keyframes cardAnim {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  .card:nth-child(1) {
    animation: cardAnim 2s 0.5s backwards;
  }
  .card:nth-child(2) {
    animation: cardAnim 2s 3.5s backwards;
  }
  .card:nth-child(3) {
    animation: cardAnim 2s 4s backwards;
  }

  .card:hover {
    transform: scale(1.1);
  }
  .image-top {
    width: 100%;
    height: 220px;
    object-fit: cover;
    -webkit-clip-path: polygon(0 4%, 100% 3%, 100% 64%, 0% 100%);
    clip-path: polygon(0 4%, 100% 3%, 100% 54%, 0% 100%);
    transition: transform 0.5s;
    transition: clip-path 1s;
  }
  .image-top:hover {
    transform: scale(1.09);
    z-index: 11;
    box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.4);
    clip-path: polygon(0 4%, 100% 3%, 100% 100%, 0% 100%);
  }
  .profile-image {
    width: 120px;
    height: 120px;
    object-fit: cover;
    border-radius: 50%;
    margin-top: -110px;
    z-index: 10;
    border: 10px solid #eee;
    box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.3);
    transition: transform 0.9s;
  }
  .profile-image:hover {
    transform: scale(1.1);
    border: 7px solid #eee;
  }
  .card h1 {
    font-family: "Ubuntu", sans-serif;
    font-size: 22px;
    color: #555;
    margin: 10px;
  }
  .job {
    font-family: "Montserrat", sans-serif;
    color: #777;
    font-weight: 300;
  }
  .about-me {
    font-family: "Josefin Sans", sans-serif;
    font-size: 14px;
    width: 90%;
    margin: 15px 0;
    text-align: center;
    font-style: italic;
    color: #444;
  }
  .card button {
    width: 120px;
    padding: 7px;
    margin: 10px 0;
    background: tomato;
    border: none;
    outline: none;
    border-radius: 25px;
    font-family: "Josefin Sans", sans-serif;
    color: #eee;
    box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.4);
    cursor: pointer;
  }
  .card:hover button {
    animation: buttonRotation 2s 1s linear;
  }
  @keyframes buttonRotation {
    0% {
      transform: scale(1) rotateZ(0);
    }
    5% {
      transform: scale(1.2) rotateZ(5deg);
    }
    10% {
      transform: scale(1.2) rotateZ(-5deg);
    }
    15% {
      transform: scale(1.2) rotateZ(5deg);
    }
    20% {
      transform: scale(1.2) rotateZ(-5deg);
    }
    25% {
      transform: scale(1.2) rotateZ(5deg);
    }
    30% {
      transform: scale(1.2) rotateZ(-5deg);
    }
    35% {
      transform: scale(1.2) rotateZ(5deg);
    }
    40% {
      transform: scale(1.2) rotateZ(-5deg);
    }
    45% {
      transform: scale(1.2) rotateZ(5deg);
    }
    50% {
      transform: scale(1.2) rotateZ(-5deg);
    }
    55% {
      transform: scale(1.2) rotateZ(5deg);
    }
    60% {
      transform: scale(1.2) rotateZ(-5deg);
    }
    65% {
      transform: scale(1.2) rotateZ(5deg);
    }
    70% {
      transform: scale(1.2) rotateZ(-5deg);
    }
    75% {
      transform: scale(1.2) rotateZ(5deg);
    }
    80% {
      transform: scale(1.2) rotateZ(-5deg);
    }
    85% {
      transform: scale(1.2) rotateZ(5deg);
    }
    90% {
      transform: scale(1.2) rotateZ(-5deg);
    }
    95% {
      transform: scale(1.2) rotateZ(5deg);
    }
    100% {
      transform: scale(1) rotateZ(0);
    }
  }

  .social-icons {
    width: 150px;
    list-style: none;
    display: flex;
    justify-content: space-evenly;
    justify-content: space-between;
    margin: 10px 0 20px 0;
    border-top: 1px solid #999;
    padding-top: 20px;
  }
  .social-icons i {
    font-size: 18px;
  }
  .fa-facebook-f {
    color: #3b5999;
  }
  .fa-youtube {
    color: #cd201f;
  }
  .fa-twitter {
    color: #55acee;
  }
  .fa-google-plus-g {
    color: #dd4b39;
  }

  @media (max-width: 1300px) {
    .cards-wrapper {
      width: 100%;
      top: 32%;
    }
    .image-top {
      height: 200px;
    }
  }
  @media (max-width: 950px) {
    .container {
      height: 100%;
    }

    .cards-wrapper {
      flex-wrap: wrap;
      padding: 300px 0 200px 0;
    }
    .card {
      margin: 0 30px 50px 30px;
    }
  }

  @media (max-width: 450px) {
    .cards-wrapper {
      padding: 250px 0 150px 0;
    }
  }
`

export default card1
