import "./rightbar.css"

function Rightbar(){
    return(
        <div className="rightbar">
            <div className="rightbarWrapper">
                <div className="streamContainter">
                    <iframe className="streamVideo" src="https://www.youtube.com/embed/uplnCYc0fDg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <img className="rightbarAd" src="/assets/ad.jpg" alt=""/>
            </div>
        </div>
    )
}

export default Rightbar;