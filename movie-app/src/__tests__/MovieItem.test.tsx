import {render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import MovieItem from "../components/MovieItem";
import Movie from "../models/movie";

describe("testing movie item component", () => {
	const data = {id: '1',name: 'scary movie', src: 'kdkldslfjldsfk.jpeg', comment: 'its a good movie', score: '9', date: '06.07.1994', genre: 'comedy', duration: 150};
	const OnRemoveMovie = jest.fn();
	render(<MovieItem movie={data} onRemoveMovie={OnRemoveMovie} />);
    test("testing if fields are exist", () => {

	const nameInput = screen.queryByText("scary movie", {exact: true});
	const genreInput = screen.queryByText("comedy", {exact: true});
	const scoreInput = screen.queryByText("9", {exact: true});
	const commentInput = screen.queryByText("its a good movie", {exact: true});
	const dateInput = screen.queryByText("06.07.1994", {exact: true});
	const durationInput = screen.queryByText("150", {exact: true});
	const posterInput = screen.getByRole("link");
	const button = screen.getByRole("button");

	expect(nameInput).not.toBeNull();
	expect(genreInput).not.toBeNull();
	expect(scoreInput).not.toBeNull();
	expect(commentInput).not.toBeNull();
	expect(dateInput).not.toBeNull();
	expect(durationInput).not.toBeNull();
	expect(posterInput).toBeInTheDocument;
	expect(button).toBeInTheDocument;	
});

test("testing if button is clicked", () => {
	const button = screen.getByRole('button');
        userEvent.click(button);
	expect(OnRemoveMovie).toHaveBeenCalledTimes(1);
        });

});