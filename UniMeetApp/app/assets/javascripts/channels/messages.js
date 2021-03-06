App.messages = App.cable.subscriptions.create('MessagesChannel', {  
  received: function(data) {
    $("#messages").removeClass('hidden');
    var scrollHeight = document.getElementById("msgs").scrollHeight;
    return $('#msgs').append(this.renderMessage(data)).animate({ scrollTop: scrollHeight }, "fast");
  },

  renderMessage: function(data) {
  	var isReply = readCookie('user_id') != data.user_id;
  	var messageString = '';
  	if (isReply) {
  		messageString += '<li class="replies">';
  	}else{
  		messageString += '<li class="sent">';
  	}

  	var imgTag= '<img src="' + data.profile_pic +'">'
  	messageString += imgTag;
  	
  	var messageContent = "<p>" + data.message + "</p>";
  	messageString += messageContent;
  	messageString +=  '</li>';
    return  messageString;
  }
});

