const fs = require("fs");
const datas = require("./set-CTA.json");
let slugs = [];

console.log(datas.data.forEach(myFunction));

function myFunction(item) {
  slugs.push(item.slug);
}

// console.log(slugs);

fs.writeFileSync("set-CTA.txt", JSON.stringify(slugs), "utf-8");
