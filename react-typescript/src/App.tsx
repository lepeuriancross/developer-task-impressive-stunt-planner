import './App.css';
import { MaxAreaData } from './types';
import { useRef, useState, useEffect } from 'react';
import { PlusIcon, BackspaceIcon } from '@heroicons/react/20/solid';
import { maxAreaData as getMaxAreaData } from './lib';

export default function App() {
	/*----- Refs -----*/

	const refInputValue = useRef<number>(2);

	/*----- Store -----*/

	const [arHeights, setArHeights] = useState([1, 8, 6, 2, 5, 4, 8, 3, 7]);

	const [maxAreaData, setMaxAreaData] = useState<MaxAreaData>({
		success: true,
		n1: 1,
		n2: 8,
		w: 7,
		h: 7,
	});
	const [maxArea, setMaxArea] = useState(49);

	/*----- Methods -----*/

	const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		refInputValue.current = parseInt(e.target.value);
	};

	const onAddHeight = () => {
		setArHeights([...arHeights, refInputValue.current]);
	};

	const onRemoveLast = () => {
		if (arHeights.length === 0) return;

		setArHeights(arHeights.slice(0, -1));
	};

	/*----- Lifecycle -----*/

	useEffect(() => {
		const data = getMaxAreaData(arHeights);

		setMaxAreaData(data);

		if (data?.success) {
			setMaxArea(data.w * data.h);
		}
	}, [arHeights]);

	/*----- Init -----*/

	const maxHeight = arHeights ? Math.max(...arHeights) : 0;

	return (
		<>
			<div className="app w-screen min-h-screen">
				<div className="app__container p-6 space-y-8 lg:px-8">
					<div className="app__container-info space-y-2">
						<h1 className="app__title font-semibold text-xl">
							Planning an impressive stunt
						</h1>
						{maxAreaData?.success ? (
							<p>
								Given the array of heights: [{arHeights.join(',')}], the maxArea
								for this stunt would be{' '}
								<b className="text-blue-600">{maxArea}</b>
							</p>
						) : (
							maxAreaData?.error && (
								<p className="text-red-500">Oops! {maxAreaData.error}</p>
							)
						)}
					</div>

					<div className="app__graph relative w-full h-[350px]">
						{arHeights.length > 0 && maxHeight > 0 && (
							<>
								<div className="app__graph-inner absolute top-0 left-0 w-full h-full overflow-x-auto">
									<div className="app__graph-track relative z-10 flex h-full pl-8">
										{maxAreaData?.success && (
											<span
												className="app__graph-max-area absolute z-20 bottom-0 left-0 bg-blue-300"
												style={{
													left: `${76 * (maxAreaData.n1 + 1)}px`,
													height: `${(100 / maxHeight) * maxAreaData.h}%`,
													width: `${76 * (maxAreaData.n2 - maxAreaData.n1)}px`,
												}}
											/>
										)}
										{arHeights.map((height, x) => (
											<span
												key={`app__graph-building-${x}`}
												className="app__graph-building relative z-20 flex justify-center items-end min-w-[76px] max-w-[76px] h-full border-b-[2px] border-gray-900"
											>
												<div className="app__graph-lines absolute z-10 top-0 left-0 w-full h-full flex flex-col justify-between">
													{[...Array(maxHeight)].map((_, y) => (
														<span
															key={`app__graph-line-${y}`}
															className="app__graph-line-y block w-full h-full border-t first:border-t-0 border-gray-200"
														/>
													))}
												</div>
												<span
													className={`app__graph-building-inner relative z-20 block w-[25px] h-full ${
														maxAreaData?.success &&
														(maxAreaData.n1 === x || maxAreaData.n2 === x)
															? 'bg-red-500'
															: 'bg-black'
													}`}
													style={{ height: `${(100 / maxHeight) * height}%` }}
												/>
												<span className="app__graph-building-height absolute z-30 bottom-1 left-1/2 transform -translate-x-1/2 text-sm text-white">
													{height}
												</span>
											</span>
										))}
									</div>
								</div>
								<div className="app__graph-margin absolute z-30 top-0 left-0 flex flex-col-reverse justify-between w-8 h-full border-r-[2px] bg-white border-gray-900">
									{[...Array(maxHeight)].map((_, y) => (
										<span
											key={`app__graph-margin-${y}`}
											className="app__graph-margin-num transform -translate-y-1/2 inline-flex justify-center items-center w-full h-full text-sm"
										>
											{y + 1}
										</span>
									))}
								</div>
							</>
						)}
					</div>

					<div className="app__inputs space-y-2">
						<label
							className="app__label block text-sm font-medium leading-6 text-gray-900"
							htmlFor="account-number"
						>
							Add a building height below and click the plus button:
						</label>
						<div className="app__input relative flex justify-start items-center">
							<input
								type="text"
								name="account-number"
								id="account-number"
								className="block w-full h-[40px] rounded-l-md border-0 px-3 py-1.5 pr-10 ring-1 ring-inset focus:ring-2 focus:ring-inset text-gray-900 ring-gray-300 placeholder:text-gray-400 focus:ring-blue-600 sm:text-sm sm:leading-6"
								defaultValue={2}
								onChange={onChangeInput}
							/>
							<button
								className="inline-flex justify-center items-center w-[60px] h-[40px] rounded-r-md bg-blue-600 text-white hover:bg-blue-500"
								type="button"
								onClick={onAddHeight}
							>
								<span className="sr-only">Add height</span>
								<PlusIcon className="h-5 w-5" aria-hidden="true" />
							</button>
							<button
								className="inline-flex justify-center items-center w-[60px] h-[40px] ml-3 rounded-md bg-red-500 text-white hover:bg-red-400"
								type="button"
								onClick={onRemoveLast}
							>
								<span className="sr-only">Remove last</span>
								<BackspaceIcon className="h-5 w-5" aria-hidden="true" />
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
