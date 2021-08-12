import { createApp, h } from "vue";
import routes from "./routes";

const mainApp = {
  data: () => ({
    currentRoute: window.location.pathname
  }),

  computed: {
    CurrentComponent() {
      return routes[this.currentRoute];
    }
  },

  render() {
    return h(this.CurrentComponent);
  }
};

createApp(mainApp).mount("#app");
