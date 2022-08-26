import React from 'react'
import './sass/app.scss';

export const Table = ({ data }) => {
    return (
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
                {data.map(element => {
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
    )
}
