import '../styles/Background.css'

function Background(props) {
    
    return (
        <div className={props.className}>
            <img className="background_img" src={props.img} alt="background" />
            <h2 className="home_title">{props.title}</h2>
        </div>
    )
}
    

export default Background