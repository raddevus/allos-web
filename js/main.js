async function loadArticle(url) {
    try {
	const response = await fetch(url);
	if (!response.ok) {
	    throw new Error('Network response was not ok');
	}
	const content = await response.text();
	document.querySelector('#mainContent').innerHTML = content;
    } catch (error) {
	document.querySelector('#mainContent').innerHTML = `<p>Error loading article: ${error.message}</p>`;
    }
}
