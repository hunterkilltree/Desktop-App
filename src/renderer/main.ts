console.log("hello world");

const coreCount = document.getElementById("cores");

// @ts-expect-error
coreCount?.innerText = `Core count here: ${api.threads}`;
// @ts-expect-error
console.log(api.threads);
