const ExperienceBlock = ({ title = null, dates = '', content, role = null }) => {
  return <div className='experienceBlock'>
    
    { title && <div className='experienceHeader'>
      <h4>{ title }</h4>
      <span>{ dates }</span>
    </div> }

    { role && <div className='role'><i>{ role }</i></div> }
    
    <p>{ content }</p>

    <style jsx>{`
      
      .experienceBlock {
        flex: 1;
      }

      .experienceHeader { 
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      .role {
        padding-top: 5px;
      }

      h4 {
        margin: 0em;
      }
    `}</style>
  </div>
}

export default ExperienceBlock