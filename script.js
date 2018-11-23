let app = new Vue({
    el: '#main',
    data: {
        workArr : [{title:"HERENOW",desc:"A place for college students to show off what they have created while critiquing, indulging, tipping and purchasing the works of others."}]
    },
    methods: {
        workDisplay: function() {
            let outer = document.getElementById("outerCircle");
            let display = document.getElementById("displayOuterCircle");
            let projs = document.getElementById("projects");
            outer.style.display = "none";
            display.style.display = "flex";
        },
        displayDetails: function() {
            console.log(this.$data.workArr[0].desc);
        }
    }
  })
