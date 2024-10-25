import profile from "../../assets/images/profile.png";
const Header = ({ name }) => {
  console.log(name);
  return (
    <header className="flex justify-between items-center border-b-2 max-w-7xl mx-auto ">
      <h2 className="font-extrabold text-3xl">Knowledge Cafe</h2>
      <img src={profile} alt="profile picture" />
    </header>
  );
};

export default Header;
