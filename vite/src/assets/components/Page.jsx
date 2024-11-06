import Paragraph from "./Paragraph.jsx";
import "./Page.css"




function Page ( {data} ) {
    console.log(data)
   
    return (

        <div className="page">
            
            {data.map((paragraph, id) => <Paragraph key={id} id={id + 1} description={paragraph} />)}

        </div>
    )
}
export default Page;