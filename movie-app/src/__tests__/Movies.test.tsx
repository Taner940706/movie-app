import {render, screen} from "@testing-library/react";
import Movies from "../components/Movies";

test("test if cards length is zero", () => {
	const onRemoveMovie = jest.fn();
	
	render(<Movies onRemoveMovie={onRemoveMovie("")} items={[]} />);
	
	const errorMsg = screen.getByText("Empty list!", {exact: true});
	expect(errorMsg).toBeInTheDocument;
	
});

test("test if cards length is more than zero", () => {
	const items= [{id: '1', name: 'scary movie', src: 'kdkldslfjldsfk.jpeg', comment: 'its a good movie', score: '9', date: '06.07.1994', genre: 'comedy', duration: 150}];
	const onRemoveMovie = jest.fn();
	
	render(<Movies onRemoveMovie={onRemoveMovie("1")} items={items} />);
	
	const errorMsg = screen.getByText("Empty list!", {exact: true});
	expect(errorMsg).not.toBeInTheDocument;
	
});