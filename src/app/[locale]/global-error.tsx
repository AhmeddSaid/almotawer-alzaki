"use client";
import React from "react";

export default function GlobalError({
	// error,
	reset,
}: Readonly<{
	error: Error & { digest?: string };
	reset: () => void;
}>) {
	return (
		<html lang="en" dir="ltr">
			<body>
				<h2>Something went wrong!</h2>
				<button onClick={() => reset()}>Try again</button>
			</body>
		</html>
	);
}
