import React, { useState } from "react";
import FormInput from "./FormInput";
import Table from "./Table";

function DisplayFormDataInTable() {

    const [tableData, setTableData] = useState([])
    const [formInputData, setformInputData] = useState(
        {
            firstname: '',
            lastname: '',
            age: ''
        }
    );

    const handleChange = (evnt) => {
        const newInput = (data) => ({ ...data, [evnt.target.name]: evnt.target.value })
        setformInputData(newInput)
    }



    const handleSubmit = (evnt) => {
        evnt.preventDefault();
        const checkEmptyInput = !Object.values(formInputData).every(res => res === "")
        if (checkEmptyInput) {
            const newData = (data) => ([...data, formInputData])
            setTableData(newData);
            const emptyInput = { firstname: '', lastname: '', age: '' }
            setformInputData(emptyInput)


        }
    }

    const resetForm = () => {
        formInputData.firstname("");
        formInputData.lastname("");
        formInputData.age("");
    };
    
    return (
        <React.Fragment>
            <div>
                <div >
                    <div >
                        <FormInput handleChange={handleChange} formInputData={formInputData} handleSubmit={handleSubmit} resetForm={resetForm}/>

                        {tableData.length > 0 && <>
                            <Table tableData={tableData} /> </>}
                        {tableData.length < 1 && <div><h3>Display Entered Data</h3></div>}
                    </div>
                    <div >

                    </div>
                </div>
            </div>

        </React.Fragment>
    );
}

export default DisplayFormDataInTable;