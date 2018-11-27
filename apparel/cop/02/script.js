let flip = 0;
let margin = 0;

let app = new Vue({
    el: '#app',
    data: {
      projects: [
        {id:"01",title:"Shirt Design",
        src:"wrongDesign.png"},
        {id:"02",title:"Shirt Design",
        src:"wrongDesign.png"}
      ]
    },
    methods: {
      setMargin: function() {
        if(flip%3===2) {
          margin = margin + 100;
          console.log("if"+flip)
          flip++;
          return margin + "px";
        } else {
          console.log("else"+flip)
          flip++;
          return margin + "px"
        }
      }
    }
  })
