
fetch('data.json')
  .then(response => response.json())
  .then(data => {
    const userList = document.getElementById('userList');

    data.forEach(user => {
      const li = document.createElement('li');
      li.textContent = user.name;
      userList.appendChild(li);
    });
  })
  .catch(error => {
    console.error('Error fetching JSON:', error);
  });
