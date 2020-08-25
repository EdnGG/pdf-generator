// import { jsPDF } from "jspdf";
// const { jsPDF } = require("jspdf"); // will automatically load the node version

// Default export is a4 paper, portrait, using millimeters for units

// https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.68/pdfmake.js



// node
// doc.text("Hello world!", 10, 10);
// doc.save("a4.pdf"); // will

const button = document.querySelector("#button-pdf")

button.addEventListener('click', () => {
  console.log('hey there')
  import { jsPDF } from "jspdf";
  var doc = new jsPDF();
  doc.text("Hello world!", 10, 10);
  doc.save("a4.pdf");
})


