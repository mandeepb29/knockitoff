import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class Courses {
    data = [
        {
           title:"Angular Complete Course",
           category:"Frontend Development" ,
           rating:4.2,
           downloads:449,
           class:'frontend',
           img:'assets/images/projects/project1.jpg',
           date:"12 March 2020",
           duration:8.5,
           desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus accusamus fugiat aut facilis quis blanditiis voluptatibus minus quisquam, aperiam labore eligendi velit ut soluta, excepturi harum. Similique aspernatur consequuntur nostrum.",
           features:[
               "Lorem ipsum dolor sit amet consectetur adipisicing elit",
               "Lorem ipsum dolor sit amet consectetur adipisicing elit",
               "Lorem ipsum dolor sit amet consectetur adipisicing elit",
               "Lorem ipsum dolor sit amet consectetur adipisicing elit",
           ]
        },
        {
            title:"Learn Nodejs",
            category:"Backend Development" ,
            rating:4.2,
            downloads:449,
            class:'backend',
            img:'assets/images/projects/project2.jpg',
            date:"12 March 2020",
            duration:8.5,
            desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus accusamus fugiat aut facilis quis blanditiis voluptatibus minus quisquam, aperiam labore eligendi velit ut soluta, excepturi harum. Similique aspernatur consequuntur nostrum.",
            features:[
                "Lorem ipsum dolor sit amet consectetur adipisicing elit",
                "Lorem ipsum dolor sit amet consectetur adipisicing elit",
                "Lorem ipsum dolor sit amet consectetur adipisicing elit",
                "Lorem ipsum dolor sit amet consectetur adipisicing elit",
            ]
         },
         {
            title:"Python 2020",
            category:"Python" ,
            rating:4.2,
            downloads:449,
            class:'python',
            img:'assets/images/projects/project3.jpg',
            date:"12 March 2020",
            duration:8.5,
            desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus accusamus fugiat aut facilis quis blanditiis voluptatibus minus quisquam, aperiam labore eligendi velit ut soluta, excepturi harum. Similique aspernatur consequuntur nostrum.",
            features:[
                "Lorem ipsum dolor sit amet consectetur adipisicing elit",
                "Lorem ipsum dolor sit amet consectetur adipisicing elit",
                "Lorem ipsum dolor sit amet consectetur adipisicing elit",
                "Lorem ipsum dolor sit amet consectetur adipisicing elit",
            ]
         },
         {
            title:"Data Science Introduction",
            category:"Data Science" ,
            rating:4.2,
            downloads:449,
            class:"datascience",
            img:'assets/images/projects/project4.jpg',
            date:"12 March 2020",
            duration:8.5,
            desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus accusamus fugiat aut facilis quis blanditiis voluptatibus minus quisquam, aperiam labore eligendi velit ut soluta, excepturi harum. Similique aspernatur consequuntur nostrum.",
            features:[
                "Lorem ipsum dolor sit amet consectetur adipisicing elit",
                "Lorem ipsum dolor sit amet consectetur adipisicing elit",
                "Lorem ipsum dolor sit amet consectetur adipisicing elit",
                "Lorem ipsum dolor sit amet consectetur adipisicing elit",
            ]
         },
         {
            title:"Data strutures and Algorithms",
            category:"Basic Coding" ,
            rating:4.2,
            downloads:449,
            class:"coding",
            img:'assets/images/projects/project5.jpg',
            date:"12 March 2020",
            duration:8.5,
            desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus accusamus fugiat aut facilis quis blanditiis voluptatibus minus quisquam, aperiam labore eligendi velit ut soluta, excepturi harum. Similique aspernatur consequuntur nostrum.",
            features:[
                "Lorem ipsum dolor sit amet consectetur adipisicing elit",
                "Lorem ipsum dolor sit amet consectetur adipisicing elit",
                "Lorem ipsum dolor sit amet consectetur adipisicing elit",
                "Lorem ipsum dolor sit amet consectetur adipisicing elit",
            ]
         }
    ]
}
