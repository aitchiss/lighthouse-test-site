export const onSuccess = async function () {
  console.log("------ STARTING PLACEHOLDER ONSUCCESS PLUGIN --------");
  //   2 mins
  await timeout(120000);
  console.log("------ FINISH PLACEHOLDER ONSUCCESS PLUGIN --------");
};

function timeout(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
