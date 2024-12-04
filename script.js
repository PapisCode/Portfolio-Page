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
                <p> I decided to make a career change in August 2024 in the coding/cybersecurity world. I am learning most of my skills through hands-on project via the Computer Programming Course at Humber College, YoutTube videos, and tutorials.
				<p>
				<a href="#" onclick="changeContent('about')">Learn more about my Projects</a>
				</p>
			`;
			break;
		case 'about':
			contentDiv.innerHTML = `
				<h2>About My Projects</h2>
				<ul>
				<li><a href="#" onclick="toggleProjectDetails(1)">Project 1: Simple Webpage</a></li>
				<li><a href="#" onclick="toggleProjectDetails(2)">Project 2: Name Storage App</a></li>
				<li><a href="#" onclick="toggleProjectDetails(3)">Project 3: Blog Website</a></li>
				</ul>
				<div id="projectDetails" class="details-card"></div>
				<p>
				<a href="#" class="button" onclick="changeContent('skills')">Check out my skills</a>
				</p>
			`;
			break;
			case 'resume':
				contentDiv.innerHTML = `
				<div class="card">
				<h2 class="title">Resume</h2>
				<p>You can view or download my resume below:</p>
				<a href="Gabriel_Hernandez_Resume.pdf" target="_blank" class="button">View Resume</a>
				<a href="Gabriel_Hernandez_Resume.pdf" download class="button">Download Resume</a>
				</div>
				`;
			break;
		case 'skills':
			contentDiv.innerHTML = `
			<div class="card">
			    <h2 class="title">Skills</h2>
				<ul>
				<li>HTML, CSS, and JavaScript - Building your responsive and interactive web pages.</li>
				<li> Git and GitHub - Collaborating with other coders using Git and uploading the changes to GitHub.</li>
				<li> Oracle - Building ER diagrams using Oracle to facilitate programming ideas.</li>
				<li>VS Code, NetBeans, and Linux - Integrated development environments (IDEs) for coding.</li>
				<li> Basic Cybersecurity Tools - Gaining familiarity with Kali Linux utilities (Network Penetration and Testing tools).</li>
				</ul>
				<p>
				I am constantly working one expanding my skills sets through hands-on projects and continuous learning.
				</p>
				<p>
				<a href="#" class="button" onclick="changeContent('contact')">Contact me</a>
				</p>
				</div>
				`;
				break;
			case 'contact':
					contentDiv.innerHTML = `
				<div class="card">
                <h2 class="title">Contact Me</h2>
				<p> If you have any questions please feel free to contact me, I would love to hear from you.</p>
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

function toggleProjectDetails(projectNumber) {
	const projectDetailsDiv = document.getElementById('projectDetails');
	let details = '';

	switch (projectNumber) {
		case 1:
			details = `
			<div class="details">
			<h3>Project 1: Simple Webpage</h3>
			<p>Built a simple webpage using HTML. Applied basic structures and elements such as headings, paragraphs, links, images, lists, and tables.</p>
			</div>
			`;
			break;
        case 2:
			details = `
			<div class="details">
            <h3>Project 2: Name Storage</h3>
            <p>Created a webpage allowing users to input and save their names using the HTML Web Storage API. This project gave me more understanding of Local Storage features.</p>
			</div>
			`;
            break; 
        case 3:
            details = `
			<div class="details">
			<h3>Project 3: Blog Website</h3>
			<p>Developed a blog website featuring a homepage, post creation, and editing functionality using Git and GitHub workflows.</p>
			</div>
			`;
			break;
	}
	projectDetailsDiv.innerHTML = details;
}