import React from 'react'
import Module from './module'

const Page = ({ page }) => (
  <>
    <h1>{page.title}</h1>
    {page.modules.map((module, index) => (
      <Module module={module} key={index} />
    ))}
  </>
)

export default Page
