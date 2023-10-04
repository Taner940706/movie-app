const AddNewMovie = () => {

    const submitHandler = (event: React.FormEvent) =>{
        event.preventDefault;
    }

    return (
        <form onSubmit={submitHandler}>
            <label htmlFor="Name: "></label>
            <input type="text" />
            <label htmlFor="Poster: "></label>
            <input type="text" />
            <label htmlFor="Comment: "></label>
            <input type="text" />
            <label htmlFor="Score: "></label>
            <input type="number" />
            <button type="submit">Add Movie</button>
        </form>
    )

}

export default AddNewMovie;