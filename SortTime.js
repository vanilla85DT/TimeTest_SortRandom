"use strict";
exports.__esModule = true;
exports.SortingTime = void 0;
var SortingTime = /** @class */ (function () {
    function SortingTime() {
    }
    SortingTime.prototype.bubble_sort = function (a) {
        var temp;
        for (var i = 0; i < a.length - 1; i++) {
            for (var j = 0; j < a.length - i - 1; j++) {
                if (a[j] > a[j + 1]) {
                    temp = a[j];
                    a[j] = a[j + 1];
                    a[j + 1] = temp;
                }
            }
        }
    };
    SortingTime.prototype.insertion_sort = function (a) {
        var key, j;
        for (var i = 1; i < a.length; i++) {
            key = a[i];
            j = i - 1;
            while (j >= 0 && key < a[j]) {
                a[j + 1] = a[j];
                j = j - 1;
            }
            a[j + 1] = key;
        }
    };
    SortingTime.prototype.shell_sort = function (a) {
        var gap;
        gap = Math.floor(a.length / 2);
        var temp, j;
        while (gap > 0) {
            for (var i = gap; i < a.length; i++) {
                temp = a[i];
                j = i;
                while (j >= gap && a[j - gap] > temp) {
                    a[j] = a[j - gap];
                    j = j - gap;
                }
                a[j] = temp;
            }
            gap = Math.floor(gap / 2);
        }
    };
    SortingTime.prototype.random_Num = function (a) {
        var Data = []; //สร้างarray Data ขึ้นมาเป็น array ว่าง
        for (var i = 0; i < a; i++) { //วนลูปจำนวน a รอบ
            Data.push(Math.floor(Math.random() * 100));
            //สุ่มเลขจำนวนเต็มระหว่าง 0 ถึง 99 และใส่ลงในarray Data     
        }
        return Data; //ส่งคืนarray Data กลับ
    };
    SortingTime.prototype.copyArray = function (a) {
        var b = []; //สร้างตัวแปร b ในลักษณะของ array แบบว่าง
        for (var i = 0; i < a.length; i++) {
            b[i] = a[i]; //ในแต่ละรอบของลูป นำข้อมูลใน a ที่อยู่ในตำแหน่ง i มาเก็บใน b ในตำแหน่งเดียวกัน
        }
        return b; //ส่งคืนarray b ที่มีข้อมูลที่คัดลอกไปใช้ได้
    };
    return SortingTime;
}());
exports.SortingTime = SortingTime;
