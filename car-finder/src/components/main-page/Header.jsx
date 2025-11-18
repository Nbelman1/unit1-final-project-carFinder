import { Link } from 'react-router';

const Header = () => {
  return (
    <div>
        <header>
            <div className="nav-container">
				<h1 className="logo"><Link to="/">CarFinder</Link></h1>

                <nav className="nav-container">
					<ul className="nav-links">
						<li className="nav-links">
							<Link to="/quiz">Start Quiz</Link>
						</li>
						<li className="nav-links">
							<Link to="/complete-list">View All Cars</Link>
						</li>
						<li className="nav-links">
							<Link to="/contact-us">Contact Us</Link>
						</li>
					</ul>
				</nav>
        	</div>
      	</header>
    </div>
  );
};

export default Header;
