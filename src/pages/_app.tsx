import "@fortawesome/fontawesome-free/css/all.min.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";
import { wrapper } from "@/redux/store";
import globals from "@/styles/global/globals";
import GlobalStyled from "@/styles/global/GlobalStyled";

const App = ({ Component, pageProps }: AppProps): React.ReactNode => {
	const { store, props } = wrapper.useWrappedStore(pageProps);

	return (
		<ThemeProvider theme={globals}>
			<Provider store={store}>
				<GlobalStyled />
				<Component {...props} />
			</Provider>
		</ThemeProvider>
	);
};

export default App;
