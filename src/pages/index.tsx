import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { setCounterActionCreator } from "@/redux/uiSlice/uiSlice";
import HomePageStyled from "@/styles/pageStyled/HomePageStyled";
import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
	const counter = useAppSelector((state) => state.ui.counter);
	const dispatch = useAppDispatch();

	const handleCounter = (value: number) => {
		dispatch(setCounterActionCreator(value));
	};

	return (
		<HomePageStyled>
			<Head>
				<title>Home</title>
				<meta name="description" content="Home page" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<section className="main-section">
				<h1 className="main-section__title">Example Page</h1>
				<p className="main-section__counter">Counter: {counter}</p>
				<div className="main-section-options">
					<button className="main-section-options__button" type="button" onClick={() => handleCounter(counter + 1)}>
						Increment
					</button>
					<button className="main-section-options__button" type="button" onClick={() => handleCounter(counter - 1)}>
						Decrement
					</button>
				</div>
			</section>
		</HomePageStyled>
	);
};

export default Home;
