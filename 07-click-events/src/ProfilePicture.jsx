function ProfilePicture() {

   const imageUrl = './src/assets/PEDRO.png'

   const handleClick = (e) => e.target.style.display = 'none'

   return(
      <img src={imageUrl} alt='Pedro image' onClick={(e) => handleClick(e)} />
   )
}

export default ProfilePicture