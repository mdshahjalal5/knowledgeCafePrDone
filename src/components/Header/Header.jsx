import profile from "../../assets/images/profile.png";
const Header = ({ name }) => {
  console.log(name);
  return (
    <div>
      <h2>Knowledge Cafe</h2>
      <img src={profile} alt="profile picture" />
    </div>
  );
};

export default Header;
