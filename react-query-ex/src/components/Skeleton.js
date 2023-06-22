import { Skeleton } from "@mui/material";

export const MuiSkeleton = () => {
	return (
		<div
			style={{
				display: "flex",
				flexWrap: "wrap",
				flexDirection: "column",
				alignContent: "center",
			}}
		>
			<Skeleton variant="rounded" width={200} height={300} />
			<Skeleton
				variant="text"
				sx={{ fontSize: "1.5rem", margin: "4px 0" }}
				width={200}
			/>
			<Skeleton
				variant="text"
				sx={{ fontSize: "1.5rem", marginBottom: "4px 0" }}
				width={50}
			/>
		</div>
	);
};
