function springVacationTrip(input) {
    let daysOfTheVacation = parseInt(input.shift());
    let budget = parseFloat(input.shift());
    let countPeople = parseInt(input.shift());
    let priceFuelPerKilometer = parseFloat(input.shift());
    let foodExpensesPerPerson = parseFloat(input.shift());
    let priceHotelRoomPerNigthPerPerson = parseFloat(input.shift());
    let totalHotelEpenses = countPeople * daysOfTheVacation * priceHotelRoomPerNigthPerPerson;
    let theyReachedTheDestination = true;
  
    if (countPeople > 10) {
      totalHotelEpenses = 0.75 * totalHotelEpenses;
    }
  
    let totalExpenses = totalHotelEpenses + countPeople * daysOfTheVacation * foodExpensesPerPerson;
  
    for (let day = 1; day <= daysOfTheVacation; day++) {
      let travelledDistance = parseFloat(input.shift());
      let travelledExpenses = travelledDistance * priceFuelPerKilometer;
      totalExpenses += travelledExpenses;
      if (day % 3 === 0 || day % 5 === 0) {
        totalExpenses += 0.40 * totalExpenses;
      }
      if (day % 7 === 0) {
        totalExpenses -= totalExpenses / countPeople;
      }
      if (budget < totalExpenses) {
        theyReachedTheDestination = false;
        break;
      }
    }
    console.log(theyReachedTheDestination ?
      `You have reached the destination. You have ${(budget-totalExpenses).toFixed(2)}$ budget left.` :
      `Not enough money to continue the trip. You need ${Math.abs(budget-totalExpenses).toFixed(2)}$ more.`);
  }
springVacationTrip([7, 12000, 5, 1.5, 10, 20, 512, 318, 202, 154, 222, 108, 123]);
springVacationTrip([10, 20500, 11, 1.2, 8, 13, 100, 150, 500, 400, 600, 130, 300, 350, 200, 300])