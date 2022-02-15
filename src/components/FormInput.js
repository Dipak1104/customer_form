function FormInput({ handleChange, formInputData, handleSubmit,resetForm }) {

    const checkAllFieldsFilled = (formInputData.firstname !== "") && (formInputData.lastname !== "") && (formInputData.age !== "")

    
    return (

        <div  >
            <h1>Customer Details</h1><br></br>
            <form>
            <div >
                <label>First Name</label>
                <input required type="text" maxLength={10} onChange={handleChange} value={formInputData.firstname} name="firstname" placeholder="First Name" />
            </div><br></br>

            <div >
                <label>Last Name</label>
                <input required type="text" maxLength={10} onChange={handleChange} value={formInputData.lastname} name="lastname" placeholder="Last Name" />
            </div><br></br>

            <div >
                <label>Age</label>
                <input required type="number" min="1" max={100} onChange={handleChange} value={formInputData.age} name="age" placeholder="Age" />
            </div>
            </form>
            <br></br>
            <br></br>

            <div >

                <button type="submit" disabled={!checkAllFieldsFilled} onClick={handleSubmit} className="submitbtn">Submit</button>
                <button type="reset" onClick={resetForm} className="resetbtn"> Reset</button>
            </div><br></br>
        </div>


    )
}

export default FormInput;