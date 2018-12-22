// JavaScript Algorithms and Data Structures Projects: Cash Register
// Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

// cid is a 2D array listing available currency.

// The checkCashRegister() function should always return an object with a status key and a change key.

// Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.

// Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.

// Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.



function checkCashRegister(price, cash, cid) {
    const cashValues = [
        { name: "PENNY", value: 0.01 },
        { name: "NICKEL", value: 0.05 },
        { name: "DIME", value: 0.1 },
        { name: "QUARTER", value: 0.25 },
        { name: "ONE", value: 1 },
        { name: "FIVE", value: 5 },
        { name: "TEN", value: 10 },
        { name: "TWENTY", value: 20 },
        { name: "ONE HUNDRED", value: 100 }
    ];

    let insufficient = { status: "INSUFFICIENT_FUNDS", change: [] };
    let closed = { status: "CLOSED", change: cid };
    let open = { status: "OPEN", change: [] };
    // Get cash in drawer total and change due
    let changeDue = cash - price;
    let cidTotal = 0;
    for (let i = 0; i < cid.length; i++) {
        cidTotal += cid[i][1];
    }
    //Check for insufficient or closed
    if (cidTotal < changeDue) {
        return insufficient;
    }
    if (cidTotal == changeDue) {
        return closed;
    }
    // Get change
    //Find highest denomination to break up change due
    let highestDenom;
    for (let j = 0; j < cashValues.length; j++) {
        if (changeDue < cashValues[j].value) {
            highestDenom = j - 1;
            break
        }
    }
    //Round money
    function round(value) {
        return Math.round(value * 100) / 100;
    }
    // Distribute change
    let counter = 0;
    function distribute(moneyName, moneyValue, cidLimit, payBack) {
        let result = 0;
        while (result < cidLimit && counter < payBack) {
            if (counter + moneyValue > payBack) {
                if (round(counter + moneyValue) === payBack) {
                    result += moneyValue
                    counter += moneyValue
                }
                break
            }
            result += moneyValue;
            counter += moneyValue;
        }
        if (result !== 0) {
            open.change.push([moneyName, result]);
        }
    }
    for (let k = highestDenom; k >= 0; k--) {
        distribute(cashValues[k].name, cashValues[k].value, cid[k][1], changeDue)
    }
    //Check for cash in drawer that could not be broken up
    if (round(counter) !== changeDue) {
        return insufficient
    }
    return open;
}

console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));

// Test Cases:
// checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]) should return an object.
// checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]) should return {status: "OPEN", change: [["QUARTER", 0.5]]}.
// checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]) should return {status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]}.
// checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) should return {status: "INSUFFICIENT_FUNDS", change: []}.
// checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) should return {status: "INSUFFICIENT_FUNDS", change: []}.
// checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) should return {status: "CLOSED", change: [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]}.