function changeContent(page) {
	var contentDiv = document.getElementById('content');

	switch (page) {
		case 'home':
            contentDiv.innerHTML = `
			    <h1>Welcome to my Portfolio</h1>
				<p>
					Learning the ways to coding using tools like:
					<ul>
                    <li><strong>VS Code</strong></li>
					<li><strong>NetBeans</strong></li>
					<li><strong>Linux</strong></li>
					<li><strong>Kali Linux</strong></li>
					<li><strong>Oracle</strong></li>
					<ul>
				</p>
                <p> I decided to make a career change in August 2024 in the coding/cybersecurity world in August 2024. I am learning most of my skills through hands-on project via the Computer Programming Course at Humber College, YoutTube videos, and tutorials.
				<p>
				<p>
				<a href="#" onclick="changeContent('about')">Learn more about my Projects</a>
				<p>
			`;
			break;
		case 'about':
			contentDiv.innerHTML = `
				<h2>About My Projects</h2>
				<ul>
				<li><a href="#" on click="toggleProjectDetails(1)">Project 1: Created a simple webpage using HTML. Applied the basic HTML structure, use essential HTML tags, and include various elements such as headings, paragraphs, links, images, lists, and tables.</a></li>
				<li><a href="#" on click="toggleProjectDetails(2)">Project 2: Created a simple web page that allows users to input their name, save it locally using the HTML5 Web Storage API, and retrieve it whenever they visit the page. Interacted with the Local Storage feature in HTML5.</a></li>
				<li><a href="#" on click="toggleProjectDetails(3)">Project 3: Created a blog website with a homepage that displays a list of blog posts, a page to create new posts, and the ability to edit or delete existing posts. Learned Git and GitHub with proper version control workflows.</a></li>
				</ul>
				<div id="ProjectDetails"></div>
				<p>
				<a href="#" onclick="changeContent('skills')">Check out my skills</a>
				</p>
			`;
			break;
		case 'skills':
			contentDiv.innerHTML = ` 
			    <h2>Skills</h2>
				<ul>
				<li>HTML, CSS, and JavaScript - Building your responsive and interactive web pages.</li>
				<li> Git and GitHub - Collaborating with other coders using Git and uploading the changes to GitHub.</li>
				<li> Oracle - Building ER diagrams using Oracle to facilitate programming ideas.</li>
				<li>VS Code, NetBeans, and Linux - Integrated development environments (IDEs) for coding.</li>
				<li> Basic Cybersecurity Tools - Gaining familiarity with Kali Linux utilities (Network Penetration and Testing tools).</li>
				</ul>
				<p>
					Feel free to reach out!
				</p> 
				<form> 
				<label for="name">Name:</label> 
				<input type="text" id="name" name="name" 
						placeholder="Your Name" required>
				<label for="email">Email:</label> 
				<input type="email" id="email" name="email" 
						placeholder="Your Email" required>
				<label for="message">Message:</label> 
				<textarea id="message" name="message" 
							placeholder="Your Message" 
							rows="4" required>
					</textarea>
				<button type="submit">Send Message</button> 
				</form>`;
			break;

		default:
			contentDiv.innerHTML = '<h2>Page not found!</h2>';
	}
}