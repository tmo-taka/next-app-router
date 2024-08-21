"use client";

export default function Error({
	error,
	reset,
}: {
	error: Error;
	reset: () => void;
}) {
	return (
		<div>
			<h2>
				TOP階層エラーです
				<br />
				{error.message}
			</h2>
			<button type="button" onClick={() => reset()}>
				Try again
			</button>
		</div>
	);
}
