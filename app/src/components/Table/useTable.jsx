import { useState, useEffect } from "react";


//Reference used to accomplish this : https://dev.to/franciscomendes10866/how-to-create-a-table-with-pagination-in-react-4lpd 



const findPages = (data) => {
    const range = []; //Defines range
    const rowsPerPage = 5; //Items per page
    const num = Math.ceil(data.length / rowsPerPage); //Calculates total number of pages
    let i = 1;
    for (let i = 1; i <= num; i++) { //Iterates from 1 to the total numbers of pages 
        range.push(i); //Numbers 1 to num are added to the range array
    }
    return range; 
};

const sliceData = (data, page) => {
    const rowsPerPage = 5;  //Items per page
    return data.slice((page - 1) * rowsPerPage, page * rowsPerPage); //Extracts parts of the data based on page number and rows per page, which determines how many list items to be shown per page
};


const useTable = (data, page, rowsPerPage) => {
    const [tableRange, setTableRange] = useState([]); //State variable to store table range
    const [slice, setSlice] = useState([]); //State variable to store sliced data

    useEffect(() => {
        //Change the table range when data/rowsPerPage has changes
        const range = findPages(data, rowsPerPage); //Find page range
        setTableRange([...range]); //Update state

        //Change the sliced data when data/page/rowsperpage has changes
        const slice = sliceData(data, page, rowsPerPage);
        setSlice([...slice]); //Update state
    }, [data, setTableRange, page, setSlice]); //Useeffect dependencies

    return { slice, range: tableRange }; //Returns data and range as an object
};

export default useTable;