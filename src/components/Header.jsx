const Header = () => {
  return (
    <header>
        <img className="header-logo" src="/Blast.png" alt="logo de Mr.Blast" />
        <div className="slogan-nav">
            <h1>Iconic Underground DJs You Should Know</h1>
            <nav>
                <ul>
                    <li><a href="#" className="btn">Home</a></li>
                    <li><a href="#" className="btn">Artist</a></li>
                    <li><a href="#" className="btn">Contact</a></li>
                </ul>
            </nav>
        </div>
    </header>
  );
}

export default Header;