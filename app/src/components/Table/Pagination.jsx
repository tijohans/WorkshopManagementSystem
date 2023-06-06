// Reference used to accomplish this : https://dev.to/franciscomendes10866/how-to-create-a-table-with-pagination-in-react-4lpd 

const calculateDataRows = (data, pageRows) => {
  const range = [];
  const num = Math.ceil(data.length / pageRows); //Calculate total number of pages required
  for (let i = 1; i <= num; i++) { //Iterate from 1 to the total number of pages and push each number in the array
    range.push(i);
  }
  return range;
};

const sliceData = (data, page, pageRows) => { //Slice the data array based on the given page and pageRows
  return data.slice((page - 1) * pageRows, page * pageRows); // Return a new array with a sliced portion of the data (calculating the start and end index for the slice)
};