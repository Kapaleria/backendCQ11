document.addEventListener('DOMContentLoaded', function() {
    const taskForm = document.getElementById('taskForm');
    const taskList = document.getElementById('taskList');

    taskForm.addEventListener('submit', async function(event) {
        event.preventDefault();

        const postData = {
            postTitle: document.getElementById('taskName').value.trim(),
            postNumber: document.getElementById('taskNumber').value.trim(),
            postContent: `${document.getElementById('taskDate').value.trim()} at ${document.getElementById('taskTime').value.trim()} in ${document.getElementById('taskPlace').value.trim()}`
        };

        if (!postData.postTitle || !postData.postNumber || !document.getElementById('taskDate').value.trim() || 
            !document.getElementById('taskTime').value.trim() || !document.getElementById('taskPlace').value.trim()) {
            alert('Please fill out all fields.');
            return;
        }

        try {
            const response = await fetch('/api/posts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(postData)
            });

            if (!response.ok) {
                const errorText = await response.text();
                throw new Error(`HTTP error! status: ${response.status}, message: ${errorText}`);
            }

            const result = await response.json();
            alert('Task added successfully!');

            const taskItem = document.createElement('div');
            taskItem.className = 'task-item';
            taskItem.innerHTML = `<h4>${result.postTitle}</h4><p>${result.postContent}</p>`;
            taskList.appendChild(taskItem);

            taskForm.reset(); // Clear the form
        } catch (error) {
            console.error('Error:', error.message);
            alert(`Failed to add task. Error: ${error.message}`);
        }
    });
});
