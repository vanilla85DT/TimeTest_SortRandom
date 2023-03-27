import { SortingTime } from "./SortTime"
let st: SortingTime = new SortingTime()
let data: number[] = st.random_Num(10000)

let startTime, stopTime : number

startTime = Date.now()
let result1 = st.bubble_sort(st.copyArray(data))
stopTime = Date.now()
console.info("Bubble sort speed :", stopTime - startTime)

startTime = Date.now()
let result2 = st.insertion_sort(st.copyArray(data))
stopTime = Date.now()
console.info("Insertion sort speed :", stopTime - startTime)

startTime = Date.now()
let result3 = st.shell_sort(st.copyArray(data))
stopTime = Date.now()
console.info("Shell sort speed :", stopTime - startTime)
