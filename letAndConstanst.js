function main() {
    // Write your code here. Read input using 'readLine()' and print output using 'console.log()'.
    
    // Print the area of the circle:
    
    // Print the perimeter of the circle:

    try {    
        // Attempt to redefine the value of constant variable PI
        PI = 0;
        // Attempt to print the value of PI
        console.log(PI);
    } catch(error) {
        console.error("You correctly declared 'PI' as a constant.");
    }
}