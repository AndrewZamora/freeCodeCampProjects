// Intermediate Algorithm Scripting: Convert HTML Entities
// Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.

function convertHTML(str) {
    let array = [...str];
    let result = [];
    array.forEach(letter => {
        if (letter === '&') {
            result.push("&amp;");
            return;
        };
        if (letter === '<') {
            result.push("&lt;");
            return;
        };
        if (letter === '>') {
            result.push("&gt;");
            return;
        };
        if (letter === '"') {
            result.push("&quot;");
            return;
        };
        if (letter === "'") {
            result.push("&apos;");
            return;
        }
        result.push(letter)
    })
    return result.join('');
}
console.log(convertHTML("abc"));
// Test Cases:
// convertHTML("Dolce & Gabbana") should return Dolce &​amp; Gabbana.
// convertHTML("Hamburgers < Pizza < Tacos") should return Hamburgers &​lt; Pizza &​lt; Tacos.
// convertHTML("Sixty > twelve") should return Sixty &​gt; twelve.
// convertHTML('Stuff in "quotation marks"') should return Stuff in &​quot;quotation marks&​quot;.
// convertHTML("Schindler's List") should return Schindler&​apos;s List.
// convertHTML("<>") should return &​lt;&​gt;.
// convertHTML("abc") should return abc.