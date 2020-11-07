import React, { useState } from "react"
import { FaAngleDoubleRight } from "react-icons/fa"
import Layout from "../../../../components/layouts/layout"
import styled from "styled-components"

// const url = "https://course-api.com/react-tabs-project"

const experiences = [
  {
    id: "recAGJfiU4CeaV0HL",
    order: 3,
    title: "Full Stack Web Developer",
    dates: "December 2015 - Present",
    duties: [
      "Tote bag sartorial mlkshk air plant vinyl banjo lumbersexual poke leggings offal cold-pressed brunch neutra. Hammock photo booth live-edge disrupt.",
      "Post-ironic selvage chambray sartorial freegan meditation. Chambray chartreuse kombucha meditation, man bun four dollar toast street art cloud bread live-edge heirloom.",
      "Butcher drinking vinegar franzen authentic messenger bag copper mug food truck taxidermy. Mumblecore lomo echo park readymade iPhone migas single-origin coffee franzen cloud bread tilde vegan flexitarian.",
    ],
    company: "TOMMY",
  },
  {
    id: "recIL6mJNfWObonls",
    order: 2,
    title: "Front-End Engineer",
    dates: "May 2015 - December 2015",
    duties: [
      "Hashtag drinking vinegar scenester mumblecore snackwave four dollar toast, lumbersexual XOXO. Cardigan church-key pabst, biodiesel vexillologist viral squid.",
      "Franzen af pitchfork, mumblecore try-hard kogi XOXO roof party la croix cardigan neutra retro tattooed copper mug. Meditation lomo biodiesel scenester",
      "Fam VHS enamel pin try-hard echo park raw denim unicorn fanny pack vape authentic. Helvetica fixie church-key, small batch jianbing messenger bag scenester +1",
      "Fam VHS enamel pin try-hard echo park raw denim unicorn fanny pack vape authentic. Helvetica fixie church-key, small batch jianbing messenger bag scenester +1",
    ],
    company: "BIGDROP",
  },
  {
    id: "rec61x18GVY99hQq5",
    order: 1,
    title: "Engineering Intern",
    dates: "May 2014 - September 2015",
    duties: [
      "I'm baby woke mumblecore stumptown enamel pin. Snackwave prism pork belly, blog vape four loko sriracha messenger bag jean shorts DIY bushwick VHS. Banjo post-ironic hella af, palo santo craft beer gluten-free.",
      "YOLO drinking vinegar chambray pok pok selfies quinoa kinfolk pitchfork street art la croix unicorn DIY. Woke offal jianbing venmo tote bag, palo santo subway tile slow-carb post-ironic pug ugh taxidermy squid.",
      "Pour-over glossier chambray umami 3 wolf moon. Iceland kale chips asymmetrical craft beer actually forage, biodiesel tattooed fingerstache. Pork belly lomo man braid, portland pitchfork locavore man bun prism.",
    ],
    company: "CUKER",
  },
]

// import experiences from "./data"

function App() {
  // const [loading, setLoading] = useState(true)
  // const [jobs, setJobs] = useState([])
  // const [value, setValue] = useState(0)

  // const fetchJobs = async () => {
  //   const reponse = await fetch(url)
  //   const newJobs = await reponse.json()
  //   setJobs(newJobs)
  //   setLoading(false)
  // }
  // useEffect(() => {
  //   fetchJobs()
  // }, [])
  // if (loading) {
  //   return (
  //     <section className="section loading">
  //       <h1>Loading...</h1>
  //     </section>
  //   )
  // }
  // const { company, dates, duties, title } = jobs[value]

  const [jobs] = useState(experiences)
  const [value, setValue] = useState(0)
  const { company, dates, duties, title } = jobs[value]
  return (
    <Layout>
      <TabWrapper>
        <section className="section">
          <div className="title">
            <h2>expierence</h2>
            <div className="underline"></div>
          </div>
          <div className="jobs-center">
            {/* btn container */}
            <div className="btn-container">
              {jobs.map((item, index) => {
                return (
                  <button
                    key={item.id}
                    onClick={() => setValue(index)}
                    className={`job-btn ${index === value && "active-btn"}`}
                  >
                    {item.company}
                  </button>
                )
              })}
            </div>
            {/* job info */}
            <article className="job-info">
              <h3>{title}</h3>
              <h4>{company}</h4>
              <p className="job-date">{dates}</p>
              {duties.map((duty, index) => {
                return (
                  <div key={index} className="job-desc">
                    <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
                    <p>{duty}</p>
                  </div>
                )
              })}
            </article>
          </div>
          <button type="button" className="btn">
            more info
          </button>
        </section>
      </TabWrapper>
    </Layout>
  )
}

export default App

export const TabWrapper = styled.div`
  background: #f1f5f8;
  text-align: left;
  color: hsl(209, 61%, 16%);
  /*
=============== 
Variables
===============
*/

  :root {
    /* dark shades of primary color*/
    --clr-primary-1: hsl(184, 91%, 17%);
    --clr-primary-2: hsl(185, 84%, 25%);
    --clr-primary-3: hsl(185, 81%, 29%);
    --clr-primary-4: hsl(184, 77%, 34%);
    --clr-primary-5: #2caeba;
    /* lighter shades of primary color */
    --clr-primary-6: hsl(185, 57%, 50%);
    --clr-primary-7: hsl(184, 65%, 59%);
    --clr-primary-8: hsl(184, 80%, 74%);
    --clr-primary-9: hsl(185, 94%, 87%);
    --clr-primary-10: hsl(186, 100%, 94%);
    /* darkest grey - used for headings */
    --clr-grey-1: hsl(209, 61%, 16%);
    --clr-grey-2: hsl(211, 39%, 23%);
    --clr-grey-3: hsl(209, 34%, 30%);
    --clr-grey-4: hsl(209, 28%, 39%);
    /* grey used for paragraphs */
    --clr-grey-5: hsl(210, 22%, 49%);
    --clr-grey-6: hsl(209, 23%, 60%);
    --clr-grey-7: hsl(211, 27%, 70%);
    --clr-grey-8: hsl(210, 31%, 80%);
    --clr-grey-9: hsl(212, 33%, 89%);
    --clr-grey-10: hsl(210, 36%, 96%);
    --clr-white: #fff;
    --clr-red-dark: hsl(360, 67%, 44%);
    --clr-red-light: hsl(360, 71%, 66%);
    --clr-green-dark: hsl(125, 67%, 44%);
    --clr-green-light: hsl(125, 71%, 66%);
    --clr-black: #222;
    --transition: all 0.3s linear;
    --spacing: 0.1rem;
    --radius: 0.25rem;
    --light-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    --dark-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
    --max-width: 1170px;
    --fixed-width: 620px;
  }
  /*
=============== 
Global Styles
===============
*/
padding: 2rem;
height: 100vh;
  *,
  ::after,
  ::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    background: hsl(210, 36%, 96%);
    color: hsl(209, 61%, 16%);
    line-height: 1.5;
    font-size: 0.875rem;
  }
  ul {
    list-style-type: none;
  }
  a {
    text-decoration: none;
  }
  h1,
  h2,
  h3,
  h4 {
    letter-spacing: 0.1rem;
    text-transform: capitalize;
    line-height: 1.25;
    margin-bottom: 0.75rem;
  }
  h1 {
    font-size: 3rem;
  }
  h2 {
    font-size: 2rem;
  }
  h3 {
    font-size: 1.25rem;
  }
  h4 {
    font-size: 0.875rem;
  }
  p {
    margin-bottom: 1.25rem;
    color: hsl(210, 22%, 49%);
  }
  @media screen and (min-width: 800px) {
    h1 {
      font-size: 4rem;
    }
    h2 {
      font-size: 2.5rem;
    }
    h3 {
      font-size: 1.75rem;
    }
    h4 {
      font-size: 1rem;
    }
    body {
      font-size: 1rem;
    }
    h1,
    h2,
    h3,
    h4 {
      line-height: 1;
    }
  }
  /*  global classes */

  /* section */
  .section {
    width: 90vw;
    margin: 5rem auto;
    max-width: 1170px;
  }

  @media screen and (min-width: 992px) {
    .section {
      width: 95vw;
    }
  }

  .loading {
    text-align: center;
  }

  .underline {
    width: 5rem;
    height: 0.25rem;
    margin-bottom: 1.25rem;
    background: #2caeba;
    margin-left: auto;
    margin-right: auto;
  }
  .title {
    margin-bottom: 4rem;
    text-align: center;
  }

  /*
=============== 
Jobs
===============
*/

  .jobs-center {
    width: 80vw;
    margin: 0 auto;
    max-width: 1170px;
  }
  .btn-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-bottom: 4rem;
    flex-wrap: wrap;
  }
  .job-btn {
    background: transparent;
    border-color: transparent;
    text-transform: capitalize;
    font-size: 1.25rem;
    letter-spacing: 0.1rem;
    margin: 0 0.5rem;
    transition: all 0.3s linear;
    cursor: pointer;
    padding: 0.25rem 0;
    line-height: 1;
    outline-color: hsl(186, 100%, 94%);
  }
  .job-btn:hover {
    color: #2caeba;
    box-shadow: #2caeba;
  }
  .active-btn {
    color: #2caeba;
    box-shadow: #2caeba;
  }

  .job-info h3 {
    font-weight: 400;
  }
  .job-info h4 {
    text-transform: uppercase;
    color: hsl(210, 22%, 49%);
    background: hsl(212, 33%, 89%);
    display: inline-block;
    padding: 0.375rem 0.75rem;
    border-radius: 0.25rem;
  }
  .job-date {
    letter-spacing: 0.1rem;
  }
  .job-desc {
    display: grid;
    grid-template-columns: auto 1fr;
    column-gap: 2rem;
    align-items: center;
    margin-bottom: 1.25rem;
  }
  .job-desc p {
    margin-bottom: 0;
    color: hsl(209, 34%, 30%);
  }
  .job-icon {
    color: #2caeba;
  }
  @media screen and (min-width: 992px) {
    .jobs-center {
      width: 90vw;
      display: grid;
      grid-template-columns: 200px 1fr;
      column-gap: 4rem;
    }
    .btn-container {
      flex-direction: column;
      justify-content: flex-start;
    }
    .job-btn {
      margin-bottom: 1rem;
    }
    .active-btn {
      box-shadow: -2px 0 #2caeba;
    }
    .job-btn:hover {
      box-shadow: -2px 0 #2caeba;
    }
  }
  .btn {
    text-transform: uppercase;
    background: #2caeba;
    color: hsl(185, 94%, 87%);
    padding: 0.375rem 0.75rem;
    letter-spacing: 0.1rem;
    font-weight: 700;
    -webkit-transition: all 0.3s linear;
    transition: all 0.3s linear;
    font-size: 0.875rem;
    border: 2px solid transparent;
    cursor: pointer;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
    border-radius: 0.25rem;
    display: block;
    width: 12rem;
    text-align: center;
    margin: 0 auto;
    margin-top: 3rem;
  }
  .btn:hover {
    color: hsl(184, 91%, 17%);
    background: hsl(185, 94%, 87%);
  }
  .center-btn {
  }
`
