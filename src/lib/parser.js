export function parseCSV(input) {

  let parsedData = []

  if(input != null) {
    parsedData = input.split("\n").map(function (line) {
      return line.split(";");
  });

  }
  return parsedData;
}
