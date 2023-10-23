import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import AddNewMovie from "../components/AddNewMovie";

describe('check if some inputs are empty', () => {
    const data = {name: 'scary movie', poster: 'kdkldslfjldsfk.jpeg', comment: 'its a good movie', score: '9', date: '06.07.1994', genre: 'comedy', duration: 150};
    test('if "name" is empty', () => {
        render(<AddNewMovie onAddMovie={() => data} />)

        const nameInput = screen.queryByLabelText('Name: ');
        expect(nameInput).toBe(null);
    });
    test('if "poster" is empty', () => {
        render(<AddNewMovie onAddMovie={()=> data} />);

        const posterInput = screen.queryByLabelText('Poster: ');
        expect(posterInput).toBe(null);
    });
    test('if "comment" is empty', () => {
        render(<AddNewMovie onAddMovie={()=> data} />);

        const commentInput = screen.queryByLabelText('Comment: ');
        expect(commentInput).toBe(null);
    });
    test('if "score" is empty', () => {
        render(<AddNewMovie onAddMovie={()=> data} />);

        const scoreInput = screen.queryByLabelText('Score: ');
        expect(scoreInput).toBe(null);
    });
    test('if "date" is empty', () => {
        render(<AddNewMovie onAddMovie={()=> data} />);

        const dateInput = screen.queryByLabelText('Date: ');
        expect(dateInput).toBe(null);
    });
    test('if "genre" is empty', () => {
        render(<AddNewMovie onAddMovie={()=> data} />);

        const genreInput = screen.queryByLabelText('Genre: ');
        expect(genreInput).toBe(null);
    });
    test('if "duration" is empty', () => {
        render(<AddNewMovie onAddMovie={()=> data} />);

        const durationInput = screen.queryByLabelText('Duration: ');
        expect(durationInput).toBe(null);
    });
    test('if all fileds are empty raise "Please fill all fields!" ', () => {
        render(<AddNewMovie onAddMovie={() => data} />);
        const errorMsg = screen.queryByText('Please fill all fields!');
         const button = screen.getByRole('button');
        userEvent.click(button);
        expect(errorMsg).toBeInTheDocument; 
    });

    describe('test score input field' , () => {

        test('if score is less than zero raise "Please fill fields with correct values!"', () => {
            const data = {name: 'scary movie', poster: 'kdkldslfjldsfk.jpeg', comment: 'its a good movie', score: '-9', date: '06.07.1994', genre: 'comedy', duration: 150};
            render(<AddNewMovie onAddMovie={() => data} />);
            const button = screen.getByRole('button');
            userEvent.click(button);
            const errorMsg = screen.queryByText('Please fill fields with correct values!');
            expect(errorMsg).toBeInTheDocument;
        });
        test('if score is more than zero raise "Please fill fields with correct values!"', () => {
            const data = {name: 'scary movie', poster: 'kdkldslfjldsfk.jpeg', comment: 'its a good movie', score: '101', date: '06.07.1994', genre: 'comedy', duration: 150};
            render(<AddNewMovie onAddMovie={() => data} />);
            const button = screen.getByRole('button');
            userEvent.click(button);
            const errorMsg = screen.queryByText('Please fill fields with correct values!');
            expect(errorMsg).toBeInTheDocument;
        });
        test('if score is between 0 and 100 raise "Please fill fields with correct values!"', () => {
            const data = {name: 'scary movie', poster: 'kdkldslfjldsfk.jpeg', comment: 'its a good movie', score: '10', date: '06.07.1994', genre: 'comedy', duration: 150};
            render(<AddNewMovie onAddMovie={() => data} />);
            const button = screen.getByRole('button');
            userEvent.click(button);
            const errorMsg = screen.queryByText('Please fill fields with correct values!');
            expect(errorMsg).toBe(null);
        });
    });
    
    
    
});

