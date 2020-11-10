import React, { useState } from "react"
import ReactMarkdown from "react-markdown"
import styled from "styled-components"
import Layout from "../../../../components/layouts/layout"

const MarkdwonEditorApp = ({ className }) => {
  const InitialMarkdown = `
  ---
  # Heading 1 
  ## Heading 2 
  ### Heading 3 
  #### Heading 4
  ##### Heading 5 
  ###### Heading 6 

  **Bold Text**

  *Italic Text*



  * Unordered List:
  * Unordered List:
  * Unordered List: 
  
  1. First item
  2. Second item
  3. Third item

  > blockquote

  [Link](http://google.com)

  ![Image](https://cdn.iconscout.com/icon/free/png-128/react-1-282599.png) 

  Task List:

  - [x] Write the press release
  - [ ] Update the website
  - [ ] Contact the media 

  ---
`

  const [markdown, setmarkdown] = useState(InitialMarkdown)

  const handleTextareaChange = e => {
    setmarkdown(e.target.value)
  }

  return (
    <Layout>
      <div className={className}>
        <div className="app">
          <textarea onChange={handleTextareaChange} value={markdown} />

          <ReactMarkdown className="preview" source={markdown} />
        </div>
      </div>
    </Layout>
  )
}

export default styled(MarkdwonEditorApp)`
padding: 2rem;
  ul {
    list-style-type: disc;
  }
  a {
    text-decoration: underline;
  }

  .app {
    display: grid;
    grid-template-columns: 0.5fr 1fr;
  }

  textarea {
    border: none;
  }

  .preview {
    padding: 1rem;
    height: 100vh;
    background-color: #fdfdfd;
  }

  blockquote {
    font-size: 50px;
    background: #efefef;
    border-left: 10px solid #1f425e;
    padding: 20px 30px;
    border-radius: 5px;
    margin: 0;
  }

  @media (max-width: 500px) {
    .app {
      grid-template-columns: 1fr;
    }
  }
`
