import { useEffect, useState } from "react";
import Slider from "react-rangeslider";
import "react-rangeslider/lib/index.css";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import useScrollPosition from "use-scroll-position";
import "../css/style.css";
import "../css/skin/skin-1.css";
import "../styles/globals.css";
import "../styles/switcher.css";
import Head from "next/head"
import Script from 'next/experimental-script'
import NextNProgress from "nextjs-progressbar";

function MyApp({ Component, pageProps }) {
	const [toggle1, setToggle1] = useState(false);
	const [body_, setbody_] = useState();
	const [header, setHeader] = useState("fixed");
	const [header_, setHeader_] = useState();

	useEffect(() => {
		setbody_(document.querySelector("body"));
		setHeader_(document.getElementsByClassName("main-bar-wraper"));
	}, []);

	let scrollPosition = useScrollPosition();
	function toggle() {
		setToggle1(!toggle1);
	}

	const chageHeader = (value) => {
		setHeader(value);
		if (value === "fixed") {
			header_[0].classList.add("sticky-header");
			header_[0].classList.remove("sticky-no");
		} else {
			header_[0].classList.add("sticky-no");
			header_[0].classList.remove("sticky-header");
			header_[0].classList.remove("is-fixed");
		}
	};

	const onChange = (value) => {
		setSliderValu(value);
		body_.style.padding = value + "px";
	};

	header === "fixed" && scrollPosition > 10
		? header_ && header_[0].classList.add("is-fixed")
		: header_ && header_[0].classList.remove("is-fixed");

	return (
		<>

			<Head>
				<title>Developers Lobby</title>
				<meta http-equiv="content-language" content="en" />
				<meta charset="UTF-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<meta name="keywords" content="web development company, web development agency, software house, web agency, software solutions company" />
				<meta name="author" content="Muqeet Mughal" />
				<meta name="publisher" content="Muqeet Mughal" />
				<meta name="copyright" content="Muqeet Mughal" />
				<meta name="description" content="Developers Lobby is the best mobile and web application development agency providing its services globally. We provides the best solutions to your problems." />

				<meta name="google-site-verification" content="wswlm-zgw5bFQ5-e2ZVSDDbPCqrFS5rVlFPigxSuEHk" />
			</Head>

			<script async src="https://www.googletagmanager.com/gtag/js?id=G-GVY0H5FZJW"></script>

			<script
				dangerouslySetInnerHTML={{
					__html: `
					
					
					  window.dataLayer = window.dataLayer || [];
					  function gtag(){dataLayer.push(arguments);}
					  gtag('js', new Date());
					
					  gtag('config', 'G-GVY0H5FZJW');
        		`,
				}}
			/>
			<div className="page-wraper">
				<NextNProgress />
				<Component {...pageProps} />
			</div>


			<a href="#top">
				<button
					className="scroltop icon-up"
					type="button"
					style={{ display: "inline-block" }}
				>
					<i className="fa fa-arrow-up" />
				</button>
			</a>
		</>
	);
}

export default MyApp;
