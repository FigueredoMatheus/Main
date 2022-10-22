
export default function operations(operation, num1, num2){
    switch (operation) {
        case '+':
            return num1 + num2
        case '-':
            return num1 - num2
        case '*':
            return num1 * num2
        default:
            return num1 / num2 
    }

}