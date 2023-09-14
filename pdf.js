import { jsPDF } from "jspdf";
// document.getElementsByClassName('printTo')[0].addEventListener('click', function(generatePDF) {
// console.log('help');
// const element = document.getElementsByClassName('savedList');
// html2pdf(element);
// })


const doc = new jsPDF();
doc.text("Hello world!", 10, 10);
doc.save("a4.pdf");