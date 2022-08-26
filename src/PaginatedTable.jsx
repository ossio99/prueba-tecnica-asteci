import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import ReactPaginate from 'react-paginate';
import { Modal } from './Modal';

export const PaginatedTable = ({ data }) => {
    const [currentItems, setCurrentItems] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage = 10;

    useEffect(() => {
        const endOffset = itemOffset + itemsPerPage;
        setCurrentItems(data.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(data.length / itemsPerPage));
    }, [itemOffset, itemsPerPage, data]);

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % data.length;
        setItemOffset(newOffset);
    };

    return (
        <>

            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">_id</th>
                        <th scope="col">cityid</th>
                        <th scope="col">name</th>
                        <th scope="col">state</th>
                        <th scope="col">probabilityofprecip</th>
                        <th scope="col">relativehumidity</th>
                        <th scope="col">lastreporttime</th>
                        <th scope="col">Llueve</th>
                    </tr>
                </thead>
                <tbody>
                    {currentItems.map(element => {
                        return <tr key={element._id}>
                            <th scope="row">{element._id}</th>
                            <td>{element.cityid}</td>
                            <td>{element.name}</td>
                            <td>{element.state}</td>
                            <td>{element.probabilityofprecip}</td>
                            <td>{element.relativehumidity}</td>
                            <td>{element.lastreporttime}</td>
                            <td>{element.probabilityofprecip > 60 || element.relativehumidity > 50 ? 'Llueve' : 'No llueve'}</td>
                        </tr>
                    })}
                </tbody>
            </table>


            <ReactPaginate
                breakLabel="..."
                nextLabel="Next >"
                onPageChange={handlePageClick}
                pageRangeDisplayed={3}
                pageCount={pageCount}
                previousLabel="< Previous"
                renderOnZeroPageCount={null}
                containerClassName='pagination'
                pageClassName='page-num'
                previousLinkClassName='page-num'
                nextLinkClassName='page-num'
                activeLinkClassName='active'
            />
        </>
    );
}
