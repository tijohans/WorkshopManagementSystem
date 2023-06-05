import { useState, useEffect } from "react";

const findPages = (data) => {
    const range = [];
    const rowsPerPage = 5;
    const num = Math.ceil(data.length / rowsPerPage);
    let i = 1;
    for (let i = 1; i <= num; i++) {
        range.push(i);
    }
    return range;
};

const sliceData = (data, page) => {
    const rowsPerPage = 5;
    return data.slice((page - 1) * rowsPerPage, page * rowsPerPage);
};


const useTable = (data, page, rowsPerPage) => {
    const [tableRange, setTableRange] = useState([]);
    const [slice, setSlice] = useState([]);

    useEffect(() => {
        const range = findPages(data, rowsPerPage);
        setTableRange([...range]);

        const slice = sliceData(data, page, rowsPerPage);
        setSlice([...slice]);
    }, [data, setTableRange, page, setSlice]);

    return { slice, range: tableRange };
};

export default useTable;