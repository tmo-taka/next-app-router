"use client"; // Error boundaries must be Client Components

export default function GlobalError({
	error,
	reset,
}: {
	error: Error & { digest?: string };
	reset: () => void;
}) {
	console.log(error);
	return (
		// TOP階層でのエラー
		<html lang="ja">
			<body>
				<h2>Something went wrong!</h2>
				<button type="button" onClick={() => reset()}>
					Try again
				</button>
			</body>
		</html>
	);
}
