import concImg from '../../assets/images/key-concepts.png';

function Header() {
  return (
    <header>
      <img src={concImg} alt="Medal badge with a star" />
      <h1>React Concepts</h1>
      <p>Selected React concepts you should know about</p>
    </header>
  );
}

export default Header;