type NavInfo = {
	title: string;
	action: () => void;
}

export const Navigation = (props:
	{
		clkMoveHome: () => void;
		clkCounter: () => void;
		clkToggle: () => void;
		clkSummary: () => void;
	}) => {

	const { clkMoveHome, clkCounter, clkToggle, clkSummary } = props;
	const NavInfos: NavInfo[] = [
		{
			title: "Letphil",
			action: clkMoveHome,
		},
		{
			title: "Counter",
			action: clkCounter,
		},
		{
			title: "Toggle",
			action: clkToggle,
		},
		{
			title: "Summary",
			action: clkSummary,
		}
	]

	return (
		<div className="bg-slate-100 flex flex-row justify-end items-center gap-5 h-15">
			{NavInfos.map((item, index) => {
				return (
					<div key={index} className="px-4 py-2 bg-black text-white rounded-lg m-2 hover:scale-105 duration-150">
						<button onClick={item.action}>
							<span>{item.title}</span>
						</button>
					</div>
				)
			})}
		</div>
	)
}