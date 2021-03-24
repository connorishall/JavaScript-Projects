//OBJECT THAT KEEPS TRACK OF VALUES
const Calculator = {
    Display_Value: '0',
    First_Operhand: null,
    Wait_Second_Operhand: false,
    operator: null,
};

//MODIFIES VALUES EACH TIME THE BUTTON IS CLICKED
function Input_Digit(digit) {
    const { Display_Value, Wait_Second_Operhand } = Calculator;
    if(Wait_Second_Operhand === true) {
        Calculator.Display_Value = digit;
        Calculator.Wait_Second_Operhand = false;
    } else {
        Calculator.Display_Value = Display_Value === '0' ? digit : Display_Value + digit
    }
}
//THIS SECTION HANDLES DECIMAL POINTS
function Input_Decimal(dot) {
    if (Calculator.Wait_Second_Operhand === true) return;
    if (!Calculator.Display_Value.includes(dot)) {
        Calculator.Display_Value += dot;
    }
}

//HANDELS OPRETTION
function Handle_Operator(Next_Operator) {
    const {First_Operhand, Display_Value, operator } = Calculator
    const Value_of_Input = parseFloat(Display_Value);
    if (operator && Calculator.Wait_Second_Operhand) {
        Calculator.operator = Next_Operator
        return;
    }
    if (First_Operhand === null) {
        Calculator.First_Operhand
    } else if (operator) {
        const Value_Now = First_Operhand || 0;
        let result = Perform_Calculaton[operator](Value_Now, Value_of_Input)
        result = Number(result.toFixed(9))
        result = (result * 1).toString()
        Calculator.Display_Value = parseFloat(result);
        Calculator.First_Operhand = parseFloat(result);
    }
    Calculator.Wait_Second_Operhand = true;
    Calculator.operator = Next_Operator;
}


const Perform_Calculaton = {
    '/': (First_Operhand, Second_Operhand) => First_Operhand / Second_Operhand,

    '*': (First_Operhand, Second_Operhand) => First_Operhand * Second_Operhand,

    '+' : (First_Operhand, Second_Operhand) => First_Operhand + Second_Operhand,

    '-' : (First_Operhand, Second_Operhand) => First_Operhand - Second_Operhand,

    '=' : (First_Operhand, Second_Operhand) => First_Operhand = Second_Operhand,
};

function Calculator_Reset() {
    Calculator.Display_Value = '0';
    Calculator.First_Operhand = null;
    Calculator.Wait_Second_Operhand = false;
    Calculator.operator = null;
}

function Update_Display() {
    const display = document.querySelector('.calculator-screen');
    display.value = Calculator.Display_Value;
}

//MONITORS BUTTON CLICKS
const keys = document.querySelector('.calculator-keys');
keys.addEventListener('click', (event) => {
    const { target } = event;
    if (!target.matches('button')) {
        return;
    }

    if (target.classList.contains('operator')) {
        Handle_Operator(target.value);
        Update_Display();
        return;
    }

    if (target.classList.contains('decimal')) {
        Input_Decimal(target.value);
        Update_Display();
        return;
    }

    if (target.classList.contains('all-clear')) {
        Calculator_Reset();
        Update_Display();
        return;
    }
    Input_Digit(target.value);
    Update_Display();
})