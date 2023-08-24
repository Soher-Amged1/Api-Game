import { Ui } from "./uiModule.js";
let id=""
let result=""
export class GameDetails {
   constructor(id) {
   document.getElementById("btnClose").addEventListener("click", (e) => {
         document.querySelector(".home").classList.remove("d-none");
         document.querySelector(".details").classList.add("d-none");
      });
      this.getDetails(id)
   }
   async getDetails(id) {
      const loading = document.querySelector(".loading");
      loading.classList.remove("d-none");
      const url = `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}}`;
      const options = {
         method: "GET",
         headers: {
            "X-RapidAPI-Key": "761b8a3226msh868f0d927cb6ea4p117ef0jsn46d63d281712",
            "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
         },
      };
      const req =await fetch(url, options);
       result = await req.json();
      new Ui().displaydetails(result)
      loading.classList.add("d-none");

    }
    
  

}
