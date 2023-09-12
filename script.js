// Sukurti funkcijas, kurios paleidžia ciklą su skaičiais nuo 1 iki 100. Šie ciklai:
// 1. Padaugina skaičių iš 2.

// function task1() {
//     for (let i = 1; i <= 100; i++) {
//       let output = i*2
//       console.log(output)
//     } 
//   }
//   task1()

// // // 2. Padaugina skaičių iš 5.

// function task2() {
//     for (let i = 1; i <= 100; i++) {
//       let output = i*5
//       console.log(output)
//     } 
//   }
//   task2()

// // // 3. Prideda prie skaičiaus 5.

// function task3() {
//     for (let i = 1; i <= 100; i++) {
//       let output = i+5
//       console.log(output)
//     } 
//   }
//   task3()

// // // 4. Atima iš skaičiaus 2.

// function task4() {
//     for (let i = 1; i <= 100; i++) {
//       let output = i-2
//       console.log(output)
//     } 
//   }
//   task4()

// // // 5. Pakelia skaičių kvadratu.

// function task5() {
//     for (let i = 1; i <= 100; i++) {
//       let output = i*i
//       console.log(output)
//     } 
//   }
//   task5()

// // // 6. Pakelia skaičių kūbu.

// function task6() {
//     for (let i = 1; i <= 100; i++) {
//       let output = Math.pow(i,3)
//       console.log(output)
//     } 
//   }
//   task6()

//7. Sukurti analogiškas funkcijas pirmoms užduotims, tačiau padaryti, jog ciklai skaičiuotųsi nuo 100 iki 1.

//   8. Kiekvienos užduoties išvesties tekstą suformuluoti, jog būtų parašytas užduoties sprendimas.

// 9. Papildyti funkcijas, jog jos priimtu šiuos argumentus:
// 9.1. Nusakytų nuo kokio skaičiaus prasidės ciklas.
// 9.2. Nusakytų iki kokio skaičiaus veiks ciklas.
// 9.3. Nusakytų kelinto ciklo metu turi išvesti atsakymą į konsolę.

  // 1. Padaugina skaičių iš 2.

  function task1(number, startNumber, endNumber, nthLoop) {
    for (let i = startNumber; i >= endNumber; i--) {
        let output = i * number
        if (i == nthLoop){
            console.log(`${i} * ${number} = ${output}`)
        }
    } 
  }
  task1(2, 50, 1, 30)


// 2. Padaugina skaičių iš 5.

// function task2(number) {
//     for (let i = 100; i >= 1; i--) {
//       let output = i*number
//       console.log(`${i} * ${number} = ${output}`)
//     } 
//   }
//   task2(5)

// // // 3. Prideda prie skaičiaus 5.

// function task3(number) {
//     for (let i = 100; i >= 1; i--) {
//       let output = i + number
//       console.log(`${i} + ${number} = ${output}`)
//     } 
//   }
//   task3(5)

// // // 4. Atima iš skaičiaus 2.

// function task4(number) {
//     for (let i = 100; i >= 1; i--) {
//       let output = i-2
//       console.log(`${i} - ${number} = ${output}`)
//     } 
//   }
//   task4(2)

// // // 5. Pakelia skaičių kvadratu.

//   function task5(number) {
//     for (let i = 100; i >= 1; i--) {
//       let output = Math.pow(i, number)
//       console.log(`${i} ^ ${number} = ${output}`)
//     } 
//   }
//   task5(2)

// // // 6. Pakelia skaičių kūbu.

//   function task6(number) {
//     for (let i = 100; i >= 1; i--) {
//       let output = Math.pow(i,number)
//       console.log(`${i} ^ ${number} = ${output}`)
//     } 
//   }
//   task6(3)