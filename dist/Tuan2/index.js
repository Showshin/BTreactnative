"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __asyncValues = (this && this.__asyncValues) || function (o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
};
//Bai 1
const helloAsync = new Promise((resolve) => {
    setTimeout(() => resolve("Hello Async"), 2000);
});
//Bai 2
function getTen() {
    return new Promise((resolve) => {
        setTimeout(() => resolve(10), 1000);
    });
}
//Bai 3
function throwError() {
    return new Promise((_, reject) => {
        setTimeout(() => reject(new Error("Something went wrong")), 1000);
    });
}
//Bai 4
const randomNumber = new Promise((resolve) => {
    resolve(Math.random());
});
//Bai 5
function simulateTask(time) {
    return new Promise((resolve) => {
        setTimeout(() => resolve("Task Done"), time);
    });
}
//Bai 9 
function filterEven() {
    return new Promise((resolve) => {
        setTimeout(() => {
            const arr = [1, 2, 3, 4, 5, 6];
            const sochan = arr.filter(num => num % 2 === 0);
            resolve(sochan);
        }, 1000);
    });
}
//Bai 11
function exercise1() {
    return __awaiter(this, void 0, void 0, function* () {
        const message = yield new Promise((resolve) => {
            setTimeout(() => resolve("Hello Async"), 2000);
        });
        console.log("11. " + message);
    });
}
//Bai 12
function runSimulateTask() {
    return __awaiter(this, void 0, void 0, function* () {
        const result = simulateTask(2000);
        console.log("12. " + result);
    });
}
//Bai 13
function runThrowError() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield throwError();
        }
        catch (error) {
            console.error("13. Caught error:", error);
        }
    });
}
//Bai 14
function tripleAfter1Sec(num) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve) => {
            setTimeout(() => resolve(num * 3), 1000);
        });
    });
}
//Bai 15
function runSequential() {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("15. ");
        const result1 = yield tripleAfter1Sec(2);
        console.log("First:", result1);
        const result2 = yield tripleAfter1Sec(3);
        console.log("Second:", result2);
        const result3 = yield tripleAfter1Sec(4);
        console.log("Third:", result3);
    });
}
//Bai 16
function multipleParallel() {
    return __awaiter(this, void 0, void 0, function* () {
        const result = yield Promise.all([
            tripleAfter1Sec(1),
            tripleAfter1Sec(2),
            tripleAfter1Sec(3)
        ]);
        console.log("16. " + result);
    });
}
//Bai 17
function forAwaitOf() {
    return __awaiter(this, void 0, void 0, function* () {
        var _a, e_1, _b, _c;
        const promises = [
            tripleAfter1Sec(2),
            tripleAfter1Sec(3),
            tripleAfter1Sec(4),
        ];
        try {
            for (var _d = true, promises_1 = __asyncValues(promises), promises_1_1; promises_1_1 = yield promises_1.next(), _a = promises_1_1.done, !_a; _d = true) {
                _c = promises_1_1.value;
                _d = false;
                const result = _c;
                console.log("Result:", result);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (!_d && !_a && (_b = promises_1.return)) yield _b.call(promises_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
    });
}
//Bai 18
function fetchUser(userId) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve) => {
            const Users = [
                { id: 1, name: "1" },
                { id: 2, name: "2" }
            ];
            Users.forEach(u => {
                if (u.id == userId) {
                    resolve(u.name);
                }
            });
        });
    });
}
function runAll() {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("1->10");
        console.log("1.", yield helloAsync);
        console.log("2.", yield getTen());
        try {
            yield throwError();
        }
        catch (err) {
            console.log("3.", err);
        }
        randomNumber
            .then(num => console.log("4. Random:", num))
            .catch(err => console.error("4. Error:", err));
        console.log("5.", yield simulateTask(1000));
        //Bai 6
        const allResults = yield Promise.all([
            simulateTask(1000),
            simulateTask(1500),
            simulateTask(2000)
        ]);
        console.log("6. All done:", allResults);
        //Bai 7
        const firstDone = yield Promise.race([
            simulateTask(1000),
            simulateTask(500),
            simulateTask(1500)
        ]);
        console.log("7. First done:", firstDone);
        //Bai 8
        const result8 = yield Promise.resolve(2)
            .then(n => n * n)
            .then(n => n * 2)
            .then(n => n + 5);
        console.log("8. Final result:", result8);
        //Bai 9
        const evens = yield filterEven();
        console.log("9. Even numbers:", evens);
        //Bai 10
        yield simulateTask(1000)
            .then(res => console.log("10.", res))
            .catch(err => console.error("10. Error:", err))
            .finally(() => console.log(" Done"));
        console.log("11->20");
        //Bai 11
        yield exercise1();
        //Bai 12
        yield runSimulateTask();
        //Bai 13
        yield runThrowError();
        //Bai 14
        console.log("14. " + tripleAfter1Sec(2));
        //Bai 15
        yield runSequential();
        //Bai 16
        yield multipleParallel();
        //Bai 17
        yield forAwaitOf();
        //Bai 18
        yield fetchUser(1);
    });
}
runAll();
