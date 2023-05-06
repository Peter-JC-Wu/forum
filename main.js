document.getElementById('submit').addEventListener('click', function () {
  var name = document.getElementById('name').value;
  var textMessage = document.getElementById('message').value;

  var postsDiv = document.querySelector('.posts');

  var newPostDiv = document.createElement('div');

  var newPostTextMessage = document.createElement('p');
  var newPostTextMessageNode = document.createTextNode(textMessage);
  newPostTextMessage.appendChild(newPostTextMessageNode);

  var newPostNameMessage = document.createElement('p');
  var newPostNameMessageNode = document.createTextNode('Posted by: ' + name);
  newPostNameMessage.appendChild(newPostNameMessageNode);

  var newPostHR = document.createElement('hr');

  newPostDiv.append(newPostTextMessage);
  newPostDiv.append(newPostNameMessage);
  newPostDiv.append(newPostHR);

  postsDiv.append(newPostDiv);
})