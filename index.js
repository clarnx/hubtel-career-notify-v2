import getAvailablePosition from "./utils/getAvailablePosition.js";

const dateObject = new Date();
const currentWeekday = dateObject.toLocaleDateString("default", {
  weekday: "long",
});

if (currentWeekday === process.env.DAY_OF_WEEK) {
  (async () => {
    await getAvailablePosition();
  })();
}
