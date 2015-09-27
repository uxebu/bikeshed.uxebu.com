define(
  function() {
    // from https://developer.mozilla.org/en/AJAX/Getting_Started
    var httpRequest;
    var onSuccess;
//      document.getElementById("ajaxButton").onclick = function() { makeRequest('test.html'); };

    function makeRequest(url, onSuccessFunc) {
      onSuccess = onSuccessFunc;
      if (window.XMLHttpRequest) { // Mozilla, Safari, ...
        httpRequest = new XMLHttpRequest();
      } else if (window.ActiveXObject) { // IE
        try {
          httpRequest = new ActiveXObject("Msxml2.XMLHTTP");
        }
        catch (e) {
          try {
            httpRequest = new ActiveXObject("Microsoft.XMLHTTP");
          }
          catch (e) {}
        }
      }

      if (!httpRequest) {
        alert('Giving up :( Cannot create an XMLHTTP instance');
        return false;
      }
      httpRequest.onreadystatechange = alertContents;
      httpRequest.open('GET', url);
      httpRequest.send();
    }

    function alertContents() {
      if (httpRequest.readyState === 4) {
        if (httpRequest.status === 200) {
          onSuccess(httpRequest.responseText);
        } else {
          alert('There was a problem with the request.');
        }
      }
    } //missing closing bracket added by bwalton 5/11/11.
    return {xhr:makeRequest};
  }
);
