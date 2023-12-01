const Form = () => {
    return (
        <form>
            <h2>¡Add here your Doggy Soulmate!</h2>
            <label htmlFor="">Doggy Name:</label>
            <input type="text" />

            <label htmlFor="">Height Min:</label>
            <input type="text" />
            <label htmlFor="">Height Max:</label>
            <input type="text" />

            <label htmlFor="">Weight Min:</label>
            <input type="text" />
            <label htmlFor="">Weight Max:</label>
            <input type="text" />

            <label htmlFor="">Life Span:</label>
            <input type="text" />

            <label htmlFor="">Temperaments:</label>
            <select multiple>
                <option value=""></option>
            </select>

            <button>Done!</button>

        </form>
    )
};
export default Form;