// Stories
function addStory() {
    const title = document.getElementById('story-title').value;
    const content = document.getElementById('story-content').value;
    if (title && content) {
        const story = { title, content, date: new Date().toLocaleDateString() };
        let stories = JSON.parse(localStorage.getItem('stories')) || [];
        stories.push(story);
        localStorage.setItem('stories', JSON.stringify(stories));
        document.getElementById('story-title').value = '';
        document.getElementById('story-content').value = '';
        displayStories();
    }
}

function displayStories() {
    const storiesList = document.getElementById('stories-list');
    storiesList.innerHTML = '';
    const stories = JSON.parse(localStorage.getItem('stories')) || [];
    stories.forEach(story => {
        const div = document.createElement('div');
        div.className = 'story';
        div.innerHTML = `<h3>${story.title}</h3><p><small>${story.date}</small></p><p>${story.content}</p>`;
        storiesList.appendChild(div);
    });
}

// Essays
function addEssay() {
    const title = document.getElementById('essay-title').value;
    const content = document.getElementById('essay-content').value;
    if (title && content) {
        const essay = { title, content, date: new Date().toLocaleDateString() };
        let essays = JSON.parse(localStorage.getItem('essays')) || [];
        essays.push(essay);
        localStorage.setItem('essays', JSON.stringify(essays));
        document.getElementById('essay-title').value = '';
        document.getElementById('essay-content').value = '';
        displayEssays();
    }
}

function displayEssays() {
    const essaysList = document.getElementById('essays-list');
    essaysList.innerHTML = '';
    const essays = JSON.parse(localStorage.getItem('essays')) || [];
    essays.forEach(essay => {
        const div = document.createElement('div');
        div.className = 'essay';
        div.innerHTML = `<h3>${essay.title}</h3><p><small>${essay.date}</small></p><p>${essay.content}</p>`;
        essaysList.appendChild(div);
    });
}

// Load stories and essays on page load
if (document.getElementById('stories-list')) {
    displayStories();
}
if (document.getElementById('essays-list')) {
    displayEssays();
}