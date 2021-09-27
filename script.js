for(let triangle = "#"; triangle.length <= 10; triangle += "#")
console.log(triangle);

const day = ["senin", "selasa", "rabu", "kamis", "jumat", "sabtu", "minggu"];

let i = 0;
let text = "";
while (day[i]) {
  text += day[i] + ",";
  i++;
}
