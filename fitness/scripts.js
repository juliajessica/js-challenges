// var myImage = document.querySelector('img');
//
// var myHeaders = new Headers();
// myHeaders.append('Content-Type', 'image/jpeg');
//
// var myInit = { method: 'GET',
//               headers: myHeaders,
//               mode: 'cors',
//               cache: 'default' };
//
// var myRequest = new Request('flowers.jpg');
//
// fetch(myRequest,myInit).then(function(response) {
//  ...
// });


//http://deckofcardsapi.com/

let request = `https://deckofcardsapi.com/api/deck/new/`;
console.log('request', request);

fetch(request)
.then(response => {
  if (!response.ok) {
    throw Error (response.statusText);
  }
  console.log('response', response);
  return response;

})
 .catch(err => { console.log('there was an error loading your request', err);
});
