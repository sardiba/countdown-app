// console.log(process);
// console.log(process.argv);

const countdownInput = process.argv[2];
console.log(countdownInput);

if (!countdownInput) {
  console.log("oops..you need to enter a time");
  process.exit(1);
}

let countdown = parseInt(countdownInput, 10);

const timer = setInterval(() => {
  console.log("***COUNTDOWN***", countdown);
  countdown--;
  if (countdown === -1) {
    console.log("countdown stopped");
    process.exit(0); // this kills the process. or you can use clearIntervall(timer) to keep the process on but the timer stops
  }
}, 1000);
