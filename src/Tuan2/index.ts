//Bai 1
const helloAsync: Promise<String> = new Promise((resolve) => {
  setTimeout(() => resolve("Hello Async")
  , 2000);
});

//Bai 2
function getTen(): Promise<Number> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(10), 1000);
  });
}

//Bai 3
function throwError(): Promise<String> {
  return new Promise((_, reject) => {
    setTimeout(() => reject(new Error("Something went wrong")), 1000);
  });
}

//Bai 4
const randomNumber: Promise<Number> = new Promise((resolve) =>{
    resolve(Math.random());
})

//Bai 5

function simulateTask(time: number) {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Task Done"), time);
  });
}

//Bai 9 
function filterEven(): Promise<Number[]>{
    return new Promise((resolve) => {
        setTimeout(() => {
      const arr = [1, 2, 3, 4, 5, 6];
      const sochan = arr.filter(num => num % 2 === 0);
      resolve(sochan);
    }, 1000);
    })
}

//Bai 11
async function exercise1() {
  const message = await new Promise((resolve) => {
    setTimeout(() => resolve("Hello Async"), 2000);
  });
  console.log("11. " + message);
}

//Bai 12
async function runSimulateTask(){
    const result = simulateTask(2000);
    console.log("12. "+result);
}

//Bai 13
async function runThrowError() {
  try {
    await throwError();
  } catch (error) {
    console.error("13. Caught error:", error);
  }
}

//Bai 14
async function tripleAfter1Sec(num:number): Promise<Number> {
    return new Promise((resolve) =>{
        setTimeout(() => resolve(num*3),1000)
    })
}
//Bai 15
async function runSequential() {
    console.log("15. ")
    const result1 = await tripleAfter1Sec(2);
    console.log("First:", result1);

    const result2 = await tripleAfter1Sec(3);
    console.log("Second:", result2);

    const result3 = await tripleAfter1Sec(4);
    console.log("Third:", result3);
}


//Bai 16
async function multipleParallel() {
    const result = await Promise.all([
        tripleAfter1Sec(1),
        tripleAfter1Sec(2),
        tripleAfter1Sec(3)
    ]);
    console.log("16. "+ result)
}

//Bai 17
async function forAwaitOf() {
    const promises = [
        tripleAfter1Sec(2),
        tripleAfter1Sec(3),
        tripleAfter1Sec(4),
    ];
    console.log("17. ")
    for await (const result of promises) {
        console.log("", result);
    }
}

//Bai 18
async function fetchUser(userId:number) {
    return new Promise((resolve) =>{
        const Users = [
            {id:1, name: "1"},
            {id:2, name: "2"}
        ]
        Users.forEach(u => {
            if(u.id==userId){
                resolve(u.name);
            }
        });
    })
}


async function runAll(){
    console.log("1->10");
    
    console.log("1.", await helloAsync);

    console.log("2.", await getTen());

    try {
        await throwError();
    } catch (err) {
        console.log("3.", err);
    }

    randomNumber
        .then(num => console.log("4. Random:", num))
        .catch(err => console.error("4. Error:", err));

    console.log("5.", await simulateTask(1000));

    //Bai 6
    const allResults = await Promise.all([
        simulateTask(1000),
        simulateTask(1500),
        simulateTask(2000)
    ]);
    console.log("6. All done:", allResults);

    //Bai 7
    const firstDone = await Promise.race([
        simulateTask(1000),
        simulateTask(500),
        simulateTask(1500)
    ]);
    console.log("7. First done:", firstDone);

    //Bai 8
    const result8 = await Promise.resolve(2)
        .then(n => n * n)
        .then(n => n * 2)
        .then(n => n + 5);
    console.log("8. Final result:", result8);

    //Bai 9
    const evens = await filterEven();
    console.log("9. Even numbers:", evens);

    //Bai 10
    await simulateTask(1000)
    .then(res => console.log("10.", res))
    .catch(err => console.error("10. Error:", err))
    .finally(() => console.log(" Done"));

    console.log("11->20");
    //Bai 11
    await exercise1();
    //Bai 12
    await runSimulateTask();
    //Bai 13
    await runThrowError();
    //Bai 14
    console.log("14. "+ tripleAfter1Sec(2));
    //Bai 15
    await runSequential();
    //Bai 16
    await multipleParallel();
    //Bai 17
    await forAwaitOf();
    //Bai 18
    console.log("18. "+ await fetchUser(1));
}

runAll();