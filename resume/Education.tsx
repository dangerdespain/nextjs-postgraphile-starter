import ExperienceBlock from './ExperienceBlock'
import TitleBlock from './TitleBlock'

const ResumeEducation = () => {
  return <div className='resumeSectionOuter'>
      <TitleBlock title='Education' />
      <div className='resumeSectionInner'>
        <ExperienceBlock 
          title='School Name'
          dates='Date Range'
          content='Description Block'
        />
      </div>
    </div>

}

export default ResumeEducation