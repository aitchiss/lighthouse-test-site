module.exports = {
  onSuccess: async function () {
    function timeout(ms) {
      return new Promise((resolve) => setTimeout(resolve, ms));
    }

    console.log("------ STARTING PLACEHOLDER ONSUCCESS PLUGIN --------");
    //   30s
    await timeout(55000);
    console.log("------ FINISH PLACEHOLDER ONSUCCESS PLUGIN --------");
  },
};
