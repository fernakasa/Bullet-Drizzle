self.onmessage = function (obj) {
    fetch("https://gamedashboarducp.azurewebsites.net/api/game", {
        method: 'post', 
        header: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
        body: JSON.stringify(obj)
    })};