function changeContent(page) {
	var contentDiv = document.getElementById('content');

	switch (page) {
		case 'home':
            contentDiv.innerHTML = `
    
				<p>
					Learning the ways to coding using tools like: <br />
                    - VS Code <br />
                    - NetBeans <br />
                    - Linux <br />
                    - Kali Linux
				</p>

                <p> Only starting coding a few months ago, very challenging subject to learn, I am reading and watching a ton of video's on different ways to build projects such as apps and website's. I would say it is a challenging program but I do think I'm slowly getting the hang of it. Once the program is completed, I would like to get into CyberSecurity.

			`;
			break;
		case 'about':
			contentDiv.innerHTML = `
				<p>
                Project 1: <br>
                Created a simple webpage using HTML. Applied the basic HTML structure, use essential HTML tags, and include various elements such as headings, paragraphs, links, images, lists, and tables.
				</p>
				<p>
                Project 2: <br>
                Created a simple web page that allows users to input their name, save it locally using the HTML5 Web Storage API, and retrieve it whenever they visit the page. Interacted with the Local Storage feature in HTML5.
				</p>
                <p>
                Project 3: <br>
                Created a blog website with a homepage that displays a list of blog posts, a page to create new posts, and the ability to edit or delete existing posts. Learned Git and GitHub with proper version control workflows.
                </p>
			`;
			break;
		case 'contact':
			contentDiv.innerHTML = 
				` 
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