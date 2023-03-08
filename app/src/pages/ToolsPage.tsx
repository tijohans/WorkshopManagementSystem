import React, {useState, useEffect} from 'react'
import ToolCard from '../components/ToolCard'
import axios from 'axios'

export default function ToolsPage() {
  const [tools, setTools] = useState<any[]>([])

  console.log(tools)

  useEffect(() => {
      getTable()
  }, []);

  const getTable = () => {
      axios.get(`https://wms-api-ps1s.onrender.com/api/tools`)
          .then((response) => {
              setTools(response.data)
          })
          .catch(error => console.error("Error: " + error))
  }

  const listItems = tools.map(tool => <ToolCard src={tool.imageUrl} paragraph={tool.description} name={tool.name}/>)

  return (
    //!IMAGES ARE TEMPORARY
    <div className="flex flex-wrap justify-center items-center gap-4">
      {/* {<ToolCard src="https://picsum.photos/id/237/200/300" alt="Pikk" name="Brosjan" paragraph="ajhsubajojdi ndxjbcjbbc" />} */}

      <ul>
        {listItems}
      </ul>

    </div>
  )
}
