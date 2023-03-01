import React from 'react'
import ToolCard from '../components/ToolCard'

export default function ToolsOverview() {
  return (
    //!IMAGES ARE TEMPORARY
    <div className="flex flex-wrap justify-center items-center gap-4 min-h-full ">
      {<ToolCard src="https://picsum.photos/id/237/200/300" alt="Pikk" name="Brosjan" paragraph="ajhsubajojdi ndxjbcjbbc" />}
      {<ToolCard src="https://ucarecdn.com/3c7da40c-940a-4ac0-844d-b23b149cb0b6/-/format/auto/-/preview/3000x3000/-/quality/lighter/" alt="test" name="Jesus" paragraph="ajhsubajojdi ndxjbcjbbc" />}
      {<ToolCard src="https://ucarecdn.com/3c7da40c-940a-4ac0-844d-b23b149cb0b6/-/format/auto/-/preview/3000x3000/-/quality/lighter/" alt="test" name="Jesus" paragraph="ajhsubajojdi ndxjbcjbbc" />}
      {<ToolCard src="https://ucarecdn.com/3c7da40c-940a-4ac0-844d-b23b149cb0b6/-/format/auto/-/preview/3000x3000/-/quality/lighter/" alt="test" name="Jesus" paragraph="ajhsubajojdi ndxjbcjbbc" />}
    </div>
  )
}
