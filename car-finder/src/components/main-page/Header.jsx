const Header = () => {
  return (
    <div>
        <header>
            <div className="nav-container">
				{/* TODO: logo goes here, link it to home page */}
				<h1 className="logo">CarFinder</h1>

                <nav className="nav-container">
					<ul className="nav-links">
						<li>
							Discover Your Car
						</li>
						<li>
							View All Cars
						</li>
						<li>
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
