var currentSubmovie;
var baseUrl = stage.baseUrl;
stage.on('message', function(message) {

  switch(message.type) {

    case 'baseUrl':
      stage.baseUrl = baseUrl.resolveUri(message.baseUrl);
      break;

    case 'code':
        var newSubmovie = new Movie();

        // remove old movie, add new movie
        stage
          .removeChild(currentSubmovie)
          .addChild(newSubmovie);

        currentSubmovie = newSubmovie;

        // TODO: comment is missing, why are we using setTimeout?
        setTimeout(function() {
          stage.run(message.code, newSubmovie);
        }, 1);
      break;
  }

});
