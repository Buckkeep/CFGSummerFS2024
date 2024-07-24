import Avatar from './assets/avatar.jpg'


function ProfilePicture() {

    const ImageUrl = Avatar

    const handleClick = (e) => e.target.style.display = "none";

    return(<img onClick={(e) => handleClick(e)} src={ImageUrl}></img>);
}

export default ProfilePicture