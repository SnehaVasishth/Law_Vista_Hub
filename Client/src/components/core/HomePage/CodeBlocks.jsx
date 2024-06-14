import React from 'react'
import CTAButton from './Button';
import HighlightText from './HighlightText';
import {FaArrowRight} from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';

const CodeBlocks = ({codeblock,codeColor}) => {
  return (
    
      
     
        <div className={`w-[90%] flex flex-col gap-2 font-bold font-mono ${codeColor} pr-2 z-10`}>
        <TypeAnimation
            sequence={[codeblock, 3000, ""]}
            repeat={Infinity}
            cursor={true}
            style = {
                {
                    whiteSpace:"pre-line",
                    display:"block",
                }
            }
            omitDeletionAnimation={true}
        />
        </div>

    
  )
}

export default CodeBlocks
