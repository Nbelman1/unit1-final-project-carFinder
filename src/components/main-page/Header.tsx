import { Link } from 'react-router';

export interface HeaderProps {
	setUserAnswers: React.Dispatch<React.SetStateAction<string[]>>;
	setUserResponse: React.Dispatch<React.SetStateAction<string>>;
	setCurrentQuestion: React.Dispatch<React.SetStateAction<number>>;
	setShowingFollowUp: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header = ({ setUserAnswers, setUserResponse, setCurrentQuestion, setShowingFollowUp }: HeaderProps) => {

	const resetQuiz = () => {
		setUserAnswers([]);
		setUserResponse("");
		setCurrentQuestion(0);
		setShowingFollowUp(false);
	}

	return (

    <div>
        <header>
            <div className="nav-container">
				
				<h1 className="logo">
					<Link 
						onClick={resetQuiz}
						to="/"
					>
						CarFinder
					</Link>
				</h1>

                <nav className="nav-container">
					<ul className="nav-links">
						<li className="nav-links">
							<Link
								onClick={resetQuiz}
								to="/quiz"
							>
								Start Quiz
							</Link>
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
