document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get the input value
    const name = document.getElementById('name').value;

    // Display greeting if name is provided
    if (name.trim() !== '') {
        document.getElementById('userName').textContent = name;
        document.getElementById('greeting').style.display = 'block';
        document.getElementById('name').value = ''; // Clear the input
    } else {
        alert('Please enter a valid name!');
    }
});
