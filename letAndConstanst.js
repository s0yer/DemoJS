function main() {

    let area = 0;
    let perimeter = 0;
    var r = readLine();
    const PI = Math.PI;

    area = PI * Math.pow(r, 2);
    perimeter = 2 * PI * r;

    console.log(area);
    console.log(perimeter);

    try {

        PI = 0;
        console.log(PI);

    } catch(error) {
        console.error("You correctly declared 'PI' as a constant.");
    }
}