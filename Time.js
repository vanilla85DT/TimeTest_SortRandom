var data;
var startTime, stopTime;
data = [];
startTime = Date.now();
for (var i = 0; i < 10000; i++) { //ยิ่งสุ่มมากเวลาการทำงานอาจจะนานขึ้น
    data.push(Math.random());
}
stopTime = Date.now();
console.info("Random 10K number : " + (stopTime - startTime)); //เวลาที่ทำงาน
function sumData() {
    var sum;
    sum = 0;
    for (var i = 0; i <= 50000; i++)
        sum = sum + i;
    return sum;
}
startTime = Date.now();
var result = sumData();
stopTime = Date.now();
console.info("sum = ", result);
console.info("time = ", (stopTime - startTime));
