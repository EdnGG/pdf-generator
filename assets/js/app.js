// esta forma llega toma el html lo convierte en imagen y genera el pdf
$("#generatePdf").click(function (e) {
  console.log("clic pdf")

  e.preventDefault()

  let pdf = new jsPDF({
    orientation: 'p',
    unit: 'mm',
    format: 'letter',
    putOnlyUsedFonts: true,
    floatPrecision: 16 // or "smart", default is 16
  });
  let options = {
    backgroundColor: '#fff',
  }

  pdf.addHTML(document.querySelector("#contenidoPdf"), options, function () {
    pdf.save(`pdfdetest.pdf`);
  });
})

// esto es creando usted mismo el contenido del pdf
$("#generatePdfHTML").click(function (e) {
  e.preventDefault()

  let pdf = new jsPDF({
    orientation: 'p',
    unit: 'mm',
    format: 'letter',
    putOnlyUsedFonts: true,
    floatPrecision: 16 // or "smart", default is 16
  });


  pdf.table(1, 1, generateData(100), headers, { autoSize: true });
  pdf.save("ensayo.pdf");

})

var generateData = function (amount) {
  var result = [];
  var data = {
    coin: "100",
    game_group: "GameGroup",
    game_name: "XPTO2",
    game_version: "25",
    machine: "20485861",
    vlt: "0"
  };
  for (var i = 0; i < amount; i += 1) {
    data.id = (i + 1).toString();
    result.push(Object.assign({}, data));
  }
  return result;
};

function createHeaders(keys) {
  var result = [];
  for (var i = 0; i < keys.length; i += 1) {
    result.push({
      id: keys[i],
      name: keys[i],
      prompt: keys[i],
      width: 65,
      align: "center",
      padding: 0
    });
  }
  return result;
}

var headers = createHeaders([
  "id",
  "coin",
  "game_group",
  "game_name",
  "game_version",
  "machine",
  "vlt"
]);
