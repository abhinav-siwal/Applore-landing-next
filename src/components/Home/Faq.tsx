import React from 'react'
import { Accordion } from '../ui/accordion'
import Accordian from './lib/Accordian'

const Faq = ({faqData}) => {
  console.log(faqData)
  return (
    <div>
     <Accordian faqData={faqData}/>
    </div>
  )
}

export default Faq