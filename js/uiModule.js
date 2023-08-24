export class Ui {
  constructor(){
  }
 displaydata(gameList){
  console.log(gameList)
    let temp =``
      for(let i=0;i<gameList.length;i++){
        temp +=` <div class="col-md-3 mb-3">
        <div value="${gameList[i].id}"class="item h-100 rounded p-3 border border-dark text-center">
        <div class="img-card position-relative">
          <img src="${gameList[i].thumbnail}" class="h-100 rounded-top object-fit-cover card-img-top" alt="game-pic">
        </div>
        <div class="content mt-3 d-flex justify-content-between">
          <h5 class="">${gameList[i].title}</h5>
          <span class="text-bg-primary rounded p-2 badge text-white">Free</span>
          </div>
          <p class="text-secondary card-text small text-center">${gameList[i].short_description.split(" ").slice(0,6).join(",")}</p>
          <div class="card-footer d-flex justify-content-between ">
          <span class="p-1 rounded">${gameList[i].genre}</span>
          <span class="p-1 rounded">${gameList[i].platform}</span
  </div>
          </div>
        </div>
      </div>`}
      console.log(temp)
    document.getElementById("gamesTemp").innerHTML=temp
}
  displaydetails(data){
    let temp=""
    temp =`<div class="col-md-4">
    <img class="w-100" alt="game-pic" src="${data.thumbnail}">
  </div>
  <div class="col-md-8">
    <h3>Title: ${data.title}</h3>
    <p>Category: <span class="text-bg-info rounded p-1"> ${data.genre}</span> </p>
    <p>Platform: <span class="text-bg-info rounded p-1"> ${data.platform}</span> </p>
    <p>Status: <span class="text-bg-info rounded p-1"> ${data.status}</span> </p>
    <p class="small">${data.description}</p>
    <a class="btn btn-outline-warning" target="_blank" href="${data.game_url}">Show Game</a>
</div>`
document.getElementById("gamedetails").innerHTML = temp;
document.querySelector(".home").classList.add("d-none");
document.querySelector(".details").classList.remove("d-none");
    
}
}