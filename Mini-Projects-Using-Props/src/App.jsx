import React from 'react'
import {Bookmark} from 'lucide-react'

const App = () => {
  return (
    <div className='parent'>
      <div className='card'>
         <div className="top">
          <img 
            src="data:image/jpeg;base64,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 " 
            alt="Amazon logo in a professional setting, representing a job posting for Senior UI Ux Designer. The environment is clean and modern, evoking a sense of opportunity and professionalism. Text in the image: Amazon 5days ago, Senior UI Ux Designer, Part Time, Senior level, 120 dollars per hour, Mumbai India, Save, Apply Now." 
          />
          <button>Save <Bookmark size={15} /></button>
         </div>
         <div className="center">
          <h3>Amazon <span> 5days ago</span></h3>
          <h2>Senior UI/Ux Designer</h2>
          <div>
            <h4>Part Time</h4>
            <h4>Senior level</h4>
          </div>
         </div>
         <div className="bottom">
          <div>
            <h3>$120/hr</h3>
            <p>Mumbai, India</p>
          </div>
          <button>Apply Now</button>
         </div>
      </div>
    </div>
  )
}

export default App