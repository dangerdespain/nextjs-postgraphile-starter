import SiteSidebar from './SiteSidebar'

const SiteLayout = (props) => {
  return <div className='siteLayout'>
    
    <SiteSidebar />
    
    { props.children }
    
    <style jsx>{`
      
      .siteLayout {
        display: flex;
        min-height: 100vh;
      }

    `}</style>

    <style jsx global>{`
      
      html, body {
        margin: 0;
        white-space:pre-wrap;
      }

      // automatically set padding of the content div
      .siteLayout > div:nth-of-type(2) {
        padding: 1em;
      }

    `}</style>

  </div>
}

export default SiteLayout