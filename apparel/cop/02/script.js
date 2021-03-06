let flip = 0;
let margin = 0;

let app = new Vue({
    el: '#app',
    data: function() {
      return {
      projects: [
        {id:0,title:"Shirt Design",
        src:"wrongDesign.png"},
        {id:1,title:"Shirt Design",
        src:"wrongDesign.png",price:"$18",desc:"Art of the shirt, dummy item"}
      ],
      showDesc: false
    }
    },
    methods: {
      setMargin: function() {
        if(flip%3===2) {
          margin = margin + 100;
          flip++;
          return margin + "px";
        } else {
          flip++;
          return margin + "px"
        }
      },
      showDetails: function(id) {
        margin=0;
        flip=0;
        console.log(id);
        this.showDesc = true;
        document.getElementById("descTitle").innerHTML = this.projects[id].title;
        document.getElementById("rest").innerHTML = this.projects[id].desc;
      }
    }
  })
