import '../styles/Background.css'

function Background(props) {
    
    return (
        <div className="home_title_image">
            <img className={props.className} src={props.img} alt="background" />
            <h2 className="home_title">{props.title}</h2>
        </div>
    )
}
    

export default Background