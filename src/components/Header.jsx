function Header({ cartCount }) {
  return (
    <header className="header">
      <h1>ComponentCorner</h1>

      <div className="cart-container">
        <span className="cart-icon">🛒</span>
        <span className="cart-count">{cartCount}</span>
      </div>
    </header>
  );
}

export default Header;