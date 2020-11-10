
self.onmessage = function (event) {
    fetch("https://gamedashboarducp.azurewebsites.net/api/game", {
        method: 'post', 
        header: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
        body: JSON.stringify({"game": 'v1', "event": 'v1', "data": 'v1'})
    })};