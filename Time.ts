let data : number[]
let startTime, stopTime : number
data = []
startTime = Date.now()
for(let i=0; i<10000; i++){ //ยิ่งสุ่มมากเวลาการทำงานอาจจะนานขึ้น
     data.push(Math.random())
}
stopTime = Date.now()
console.info("Random 10K number : "+(stopTime - startTime))  //เวลาที่ทำงาน

function sumData() : number{ //จับแบบฟังก์ชัน
     let sum : number
     sum = 0
     for(let i=0; i<=50000; i++)
          sum = sum+i
     return sum
}
startTime = Date.now()
let result = sumData()
stopTime = Date.now()
console.info("sum = ", result)
console.info("time = ", (stopTime - startTime))

//จับเวลาการทำงานของ 3 sort เอา 10K หรือ 100K ไม่ต้อง display data 
//การวัดการทำงานของทุก sort ต้องมี data ชุดเดียวกัน
//Random ก่อน แล้ว copy มาใช้ 3 ชุด แล้วค่อยเอา แต่ละ copy ไปใช้ใน sort แต่ละ sort