
Vue.component("light-bulb", {
  props: ["source"],
  template: "<img :src='source' class='img-bulb' />"
});


Vue.component("bulb-switch", {
  props: ["switchState"],

  methods: {
    switchTheLight: function() {
      this.$emit("switch-light");
    }
  },
  template:
    "<button @click='switchTheLight' class='btn-switch'>{{ switchState }}</button>"
});

const app = new Vue({
  el: "#root",
  data() {
    return {
      appTitle: "VueJS Emit Event: Light Bulb App",
      bulbState: "off",
      bulb: {
        on: "https://www.w3schools.com/js/pic_bulbon.gif",
        off: "https://www.w3schools.com/js/pic_bulboff.gif"
      },
      switchState: "On",
      linkedIn: {
        url: "https://www.linkedin.com/in/carllomerabia"
      }
    };
  },
  methods: {
    switchLight: function() {
      switch (this.bulbState) {
        case "off":
          this.bulbState = "on";
          this.switchState = "Off";
          break;
        case "on":
          this.bulbState = "off";
          this.switchState = "On";
          break;
        default:
          break;
      }
    }
  }
});