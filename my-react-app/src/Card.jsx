import wolfavatar from '/src/assets/wolfavatar.jpg'

function Card() {

    return(
        <div className="card">
            <img className="card-image" src={wolfavatar} alt="Profile picture" width="200"/>
            <h2 className="card-title">Buckkeep</h2>
            <p className="card-text">I am an iOS developer writing a website in React and I also like to play piano</p>
        </div>
    );
}

export default Card