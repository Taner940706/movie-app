import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import AddNewMovie from "../components/AddNewMovie";

describe('check if all inputs are empty', () => {
    const data = {name: 'scary movie', poster: 'kdkldslfjldsfk.jpeg', comment: 'its a good movie', score: '9', date: '06.07.1994', genre: 'comedy', duration: 150};
    test('if "name" is empty', () => {
        render(<AddNewMovie onAddMovie={() => data} />)

        const nameInput = screen.queryByLabelText('Name: ');
	const posterInput = screen.queryByLabelText('Poster: ');
	const commentInput = screen.queryByLabelText('Comment: ');
	const scoreInput = screen.queryByLabelText('Score: ');
	const dateInput = screen.queryByLabelText('Date: ');
	const genreInput = screen.queryByLabelText('Genre: ');
	const durationInput = screen.queryByLabelText('Duration: ');

        expect(nameInput).toBe(null);
	expect(posterInput).toBe(null);
        expect(commentInput).toBe(null);
        expect(scoreInput).toBe(null);
        expect(dateInput).toBe(null);
        expect(genreInput).toBe(null);
        expect(durationInput).toBe(null);
    });

    test('if all fileds are empty raise "Please fill all fields!" ', () => {
	const onAddMovie = jest.fn();
        render(<AddNewMovie onAddMovie={onAddMovie} />);
        const errorMsg = screen.queryByText('Please fill all fields!');
        const button = screen.getByRole('button');
       	userEvent.click(button);
        console.log(errorMsg)
        expect(errorMsg).not.toBeNull(); 
    });

    describe('test score input field' , () => {
	const onAddMovie = jest.fn();
        test('if score is less than zero raise "Please fill fields with correct values!"', () => {
            render(<AddNewMovie onAddMovie={onAddMovie} />);
            const button = screen.getByRole('button');
            userEvent.click(button);
            const errorMsg = screen.queryByText('Please fill fields with correct values!');
            expect(errorMsg).toBeInTheDocument;
        });
        test('if score is more than zero raise "Please fill fields with correct values!"', () => {
            render(<AddNewMovie onAddMovie={onAddMovie} />);
            const button = screen.getByRole('button');
            userEvent.click(button);
            const errorMsg = screen.queryByText('Please fill fields with correct values!');
            expect(errorMsg).toBeInTheDocument;
        });
        test('if score is between 0 and 100', () => {
            render(<AddNewMovie onAddMovie={onAddMovie} />);
            const button = screen.getByRole('button');
            userEvent.click(button);
            const errorMsg = screen.queryByText('Please fill fields with correct values!');
            expect(errorMsg).toBe(null);
		    expect(onAddMovie).toHaveBeenCalledTimes(1);
        });
    });
    
    
    
});