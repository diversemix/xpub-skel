// https://github.com/jakesgordon/javascript-state-machine/blob/master/docs/lifecycle-events.md

const transitions = {

  onAfterDoUpload : (data) => {
    console.log("...upload complete");
  },

  onBeforeDoUpload : (data) => {
    const ms = data.fsm; // get the manuscript object
    console.log("...upload starting...");
    console.log(`
    Transition: ${data.transition}
    States: ${data.from} -> ${data.to}
    User: ${ms.userId}
    `);
    // console.log(data);
  }
};

module.exports = transitions
