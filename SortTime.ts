export class SortingTime {
     bubble_sort(a: number[]) {
          let temp: number
          for (let i = 0; i < a.length - 1; i++) {
               for (let j = 0; j < a.length - i - 1; j++) {
                    if (a[j] > a[j + 1]) {
                         temp = a[j]
                         a[j] = a[j + 1]
                         a[j + 1] = temp
                    }
               }
          }
     }
     insertion_sort(a: number[]) {
          let key, j: number
          for (let i = 1; i < a.length; i++) {
               key = a[i]
               j = i - 1
               while (j >= 0 && key < a[j]) {
                    a[j + 1] = a[j]
                    j = j - 1
               }
               a[j + 1] = key
          }
     }
     shell_sort(a: number[]) {
          let gap: number
          gap = Math.floor(a.length / 2)
          let temp, j: number
          while (gap > 0) {
               for (let i = gap; i < a.length; i++) {
                    temp = a[i]
                    j = i
                    while (j >= gap && a[j - gap] > temp) {
                         a[j] = a[j - gap]
                         j = j - gap
                    }
                    a[j] = temp
               }
               gap = Math.floor(gap / 2)
          }
     }
     random_Num(a: number): number[] {
          let Data: number[] = [] //สร้างarray Data ขึ้นมาเป็น array ว่าง
          for (let i = 0; i < a; i++) { //วนลูปจำนวน a รอบ
               Data.push(Math.floor(Math.random() * 100))
               //สุ่มเลขจำนวนเต็มระหว่าง 0 ถึง 99 และใส่ลงในarray Data     
          }
          return Data //ส่งคืนarray Data กลับ
     }
     copyArray(a: number[]): number[] { //ไว้ใช้เพื่อตรวจสอบว่าใช้ข้อมูลชุดเดียวกันทั้งหมด
          let b: number[] = [] //สร้างตัวแปร b ในลักษณะของ array แบบว่าง
          for (let i = 0; i < a.length; i++) {
               b[i] = a[i] //ในแต่ละรอบของลูป นำข้อมูลใน a ที่อยู่ในตำแหน่ง i มาเก็บใน b ในตำแหน่งเดียวกัน
          }
          return b //ส่งคืนarray b ที่มีข้อมูลที่คัดลอกไปใช้ได้
     }
}
