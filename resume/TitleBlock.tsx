const TitleBlock = ({ title }) => {
  return <div>
    <div className='title'>
      <h3>{ title }</h3>
    </div>

    <style jsx>{`
      h3 {
        margin: 0;
        position: relative;
        text-align: right;
        padding: 0 1em;
        top: -3px;
        text-transform: uppercase;
      }

      .title { 
        width: 200px;
      }
    `}</style>
  </div>
}

export default TitleBlock