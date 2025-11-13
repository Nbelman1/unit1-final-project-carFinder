const Header = () => {
  return (
    <div>
        <header>
            <div className="nav-container">
				{/* TODO: logo goes here, link it to home page */}
				<h1 className="logo">CarFinder</h1>

                <nav className="nav-container">
					<ul className="nav-links">
						<li className="nav-links">
							Discover Your Car
						</li>
						<li className="nav-links">
							View All Cars
						</li>
						<li className="nav-links">
							Contact Us
						</li>
					</ul>
				</nav>
        	</div>
      	</header>
    </div>
  );
};

export default Header;
