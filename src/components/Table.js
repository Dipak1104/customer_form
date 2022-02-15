function Table({tableData}){
    return(
        <table >
            <thead>
                <tr>
                    
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Age</th>
                </tr>
            </thead>
            <tbody>
            {
                tableData.map((data)=>{
                    return(
                        <tr>
                            <td>{data.firstname}</td>
                            <td>{data.lastname}</td>
                            <td>{data.age}</td>
                        </tr>
                    )
                })
            }
            </tbody>
        </table>
    )
}

export default Table;