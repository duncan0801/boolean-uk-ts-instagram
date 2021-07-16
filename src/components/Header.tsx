import React from "react";

function Header() {
	return (
		<header className="main-header">
			<div className="wrapper">
				<div className="chip active">
					<div className="avatar-small">
						<img
							src="https://uploads5.wikiart.org/images/salvador-dali.jpg!Portrait.jpg"
							alt="Salvador Dali"
						/>
					</div>
					<span>Salvador Dali</span>
				</div>
				<div className="chip">
					<div className="avatar-small">
						<img
							src="https://www.sartle.com/sites/default/files/images/artist/pablo-picasso-137216-5115406.jpg"
							alt="Picasso"
						/>
					</div>
					<span>Picasso</span>
				</div>
				<div className="chip">
					<div className="avatar-small">
						<img
							src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3K588mpXWsXuFcE26ZsuTRN2IeFeKCub8hA&amp;usqp=CAU"
							alt="Van Gogh"
						/>
					</div>
					<span>Van Gogh</span>
				</div>
			</div>
		</header>
	);
}

export default Header;
