
document.addEventListener("DOMContentLoaded", () => {
    let urlBase = "";
    let dataArray = []
    //document.getElementById("Submit").addEventListener("click", () => {
      chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
        var url = new URL(tabs[0].url);
        urlBase = url.hostname;
        
        document.getElementById("WebName").innerHTML = urlBase;
      });
  
      fetch('./SiteData.json')
        .then(response => response.json())
        .then(jsonData => {
          // Convert the object into an array
          dataArray = Object.values(jsonData);
          console.log(dataArray);
  
  
          // Wait for the Promise to resolve before iterating over the data
          dataArray.forEach((item) => {
            let splitArray = item.split(" ");
            if(splitArray[0] == urlBase){
              //alert(splitArray[1]);
              document.getElementById("difficulty").innerHTML = splitArray[1];
              if(splitArray[1] == "Low"){
                document.getElementById("reward").innerHTML = "15xp"
                document.getElementById("header2").style.background = "linear-gradient(180deg, #8fce00 0%, rgba(217, 217, 217, 0) 100%)";
                document.getElementById("header").style.background = "linear-gradient(180deg, #274e13 0%, #6aa84f 100%)";

              }else if(splitArray[1] == "Medium"){
                document.getElementById("reward").innerHTML = "36xp"
                document.getElementById("header2").style.background = "linear-gradient(180deg, #ffd966 0%, rgba(217, 217, 217, 0) 100%)";
                document.getElementById("header").style.background = "linear-gradient(180deg, #ce7e00 0%, #bf9000 100%)";
              }else if(splitArray[1] == "High"){
                document.getElementById("reward").innerHTML = "100xp"
                document.getElementById("header2").style.background = "linear-gradient(180deg, #D74828 0%, rgba(217, 217, 217, 0) 100%);";
                document.getElementById("header").style.background = "linear-gradient(180deg, #B30B0B 0%, #D74828 100%)";
              }
              
            }
          });
        })
        .catch(error => {
          console.error('Failed to load JSON file:', error);
        });
    //});
    document.getElementById('fight').addEventListener('click', function() {
        chrome.tabs.create({ url: './game.html' });
      });
  });
  