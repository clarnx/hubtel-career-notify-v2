import getAvailablePosition from "./utils/getAvailablePosition.js";

const dateObject = new Date();
const currentWeekday = dateObject.toLocaleDateString("default", {
  weekday: "long",
});

(async () => {
  if (currentWeekday === "Friday") {
    await getAvailablePosition();
  }
})();
