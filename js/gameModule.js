import { Ui } from "./uiModule.js";
import {GameDetails} from"./detailsModule.js";
export class Games {

    constructor() {
   document.querySelectorAll(".nav-link").forEach((link)=>{
   link.addEventListener("click",()=>{
   this.changeActiveLink(link);
   const category=link.getAttribute("category");
   this.getGames(category);
})
})
       this.getGames("mmorpg")
       loading.classList.add("d-none");

    }
      changeActiveLink(link){
      document.querySelector(".navbar-nav .active").classList.remove("active");
      link.classList.add("active")
    }

    async  getGames(category="mmorpg"){
      const loading = document.querySelector(".loading");
      loading.classList.remove("d-none");
    const url = `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`;
    const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'bee853fb2fmshe0564d525db3059p17832ajsnd1bb737c3a9a',
      'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
    }

  };
    const req = await fetch(url, options);
    let data=await req.json()
    console.log(data)   

   new Ui().displaydata(data)
   loading.classList.add("d-none");

    document.querySelectorAll(".item").forEach((item) => {
      item.addEventListener("click",()=>{
         console.log(item.getAttribute("value"))
         new GameDetails(item.getAttribute("value"))

      });
      });
   } 
   
}

