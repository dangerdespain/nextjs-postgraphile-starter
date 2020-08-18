import ExperienceBlock from './ExperienceBlock'
import TitleBlock from './TitleBlock'

const ResumeExperience = () => {
  return <div className='resumeSectionOuter'>
  <TitleBlock title='Experience' />
  
  <div className='resumeSectionInner'>
    
    <ExperienceBlock 
      title=''
      role=''
      dates=''
      content={``}
    />
  </div>
</div>

}

export default ResumeExperience