const ContentBlock = ({ title = null, dates = '', content, role = null }) => {
  return <div className='contentBlock'>
    
    <p>{ content }</p>

    <style jsx>{`
      p {
        margin: 0em;
      }
    `}</style>
  </div>
}

export default ContentBlock