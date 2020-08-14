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
      }
    `}</style>

  </div>
}

export default SiteLayout