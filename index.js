function postComment() {
  let commenter = document.getElementById('commenterName').value;
  let comment = document.getElementById('commentText').value;
  //insert comment into "comments" div in this format:
  //<div class="comment"><p>comment</p><p>Posted By: <span class="commenter">commenter</span></p></div>

  //templateString
  let commentTemplate = '<div class="comment"><p><%= comment %></p><p>Posted By: <span class="commenter"><%= commenter %></span></p></div>';

  //create template function
  let templateFn = _.template(commentTemplate);

  let commentsDiv = document.getElementById('comments');

  // execute template fn w JSON object for interpolated values
  // JSON obj:
  // { 'comment': value, 'commenter': value }

  let templateHTML = templateFn({comment: comment, commenter: commenter});

  //append, don't replace
  commentsDiv.innerHTML += templateHTML;
}
