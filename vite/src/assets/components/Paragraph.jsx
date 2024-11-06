import './Paragraph.css'

function Paragraph ({id, description} ) {
   
    return (

        <div className="paragraph">
            <h2>{id}</h2>
            <p>{description}</p>

        </div>
    )
}
export default Paragraph;