function getElementWidth (content, padding, border) {

function extractNumber(value) {

return parseFloat(value.replace("px", ""));
}

const contentWidth = extractNumber(content);
const paddingWidth = extractNumber(padding) * 2;
const borderWidth = extractNumber(border) * 2;

return contentWidth + paddingWidth + borderWidth;
}

console.log(getElementWidth("50px", "8px", "4px"));
console.log(getElementWidth("60px", "12px", "8.5px"));
console.log(getElementWidth("200px", "0px", "0px"));