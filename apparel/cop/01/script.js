let flip = 0;
let margin = 0;

let app = new Vue({
    el: '#app',
    data: function() {
      return {
      projects: [
        {id:0,title:"Shirt Design",
        src:["noCoastBlues.png"]},
        {id:1,title:"Grandpa Sweater",
        src:["IMG_0106-min.JPG","IMG_0107-min.JPG","IMG_0108-min.JPG","IMG_0116-min.JPG"],price:"$20",desc:"Mens large - patch on back - one of a kind"}
      ],
      showDesc: false,
      srcNum:0
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
