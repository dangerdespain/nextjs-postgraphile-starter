import TitleBlock from "./TitleBlock"
import EducationBlock from "./ContentBlock"

const ResumeSummary = () => {
  return <div className='resumeSectionOuter'>
      <TitleBlock title='Summary' />
      <div className='resumeSectionInner'>
        <EducationBlock
          content={``}
        />
      </div>
    </div>
}

export default ResumeSummary