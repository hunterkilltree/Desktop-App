"use strict";
console.log("hello world");
const coreCount = document.getElementById("cores");
// @ts-expect-error
coreCount === null || coreCount === void 0 ? void 0 : coreCount.innerText = `Core count here: ${api.threads}`;
// @ts-expect-error
console.log(api.threads);
