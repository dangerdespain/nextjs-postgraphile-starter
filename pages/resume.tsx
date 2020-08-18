import { withLayout } from '@moxy/next-layout'
import SiteLayout from '../components/SiteLayout'

import ResumeEducation from '../resume/Education'
import ResumeExperience from '../resume/Experience'
import ResumeSummary from '../resume/Summary'

const ResumePage = () => {
  return <div>
    
    <ResumeSummary />

    <ResumeEducation />

    <ResumeExperience />

    <style jsx global>{`
      .resumeSectionOuter {
        display: flex;
        margin: 1.25em 0;
      }
      .resumeSectionInner {
        flex: 1;
      }
    `}</style>

  </div>
}

export default withLayout(<SiteLayout />)(ResumePage)