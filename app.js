let vm = Vue.createApp({
  data() {
    return {
      perspective: 100,
      rotateX: 0,
      rotateY: 0,
      rotateZ: 0,
    };
  },
  methods: {
    reset() {
      (this.perspective = 100),
        (this.rotateX = 0),
        (this.rotateY = 0),
        (this.rotateZ = 0);
    },
    async copy() {
      let text = `${this.box_style}`;
      await navigator.clipboard.writeText(text);

      alert("CSS copied to clipboard");
    },
  },
  computed: {
    box_style() {
      return (
        "transform: perspective(" +
        this.perspective +
        "px) rotateX(" +
        this.rotateX +
        "deg) rotateY(" +
        this.rotateY +
        "deg) rotateZ(" +
        this.rotateZ +
        "deg);"
      );
    },
  },
}).mount("#app");
