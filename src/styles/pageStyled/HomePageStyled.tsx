import styled from "styled-components";

const HomePageStyled = styled.main`
  max-width: 1526px;
	margin: 0 auto;
	padding: 0 20px;

	@media (max-width: ${(props) => props.theme.sizes.mobileLarge}) {
		padding: 0 10px;
	}

	.main-section {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-evenly;
		height: 100vh;

		&__title {
			font-size: 5rem;
			font-weight: 700;
			color: ${(props) => props.theme.colors.text_primary};

			@media (max-width: ${(props) => props.theme.sizes.mobileLarge}) {
				font-size: 3rem;
				padding: 5px 10px;
			}
		}

		&__counter {
			font-size: 3rem;
			font-weight: 700;
			color: ${(props) => props.theme.colors.text_primary};

			@media (max-width: ${(props) => props.theme.sizes.mobileLarge}) {
				font-size: 2rem;
			}
		}

		&-options {
			display: flex;
			align-items: center;
			justify-content: center;
			gap: 20px;

			&__button {
				padding: 10px 20px;
				font-size: 2rem;
				font-weight: 700;
				color: ${(props) => props.theme.colors.text_primary};
				background-color: ${(props) => props.theme.colors.secondary};
				border: 2px solid ${(props) => props.theme.colors.text_primary};
				border-radius: 10px;
				transition: all 0.3s ease-in-out;
				
				@media (max-width: ${(props) => props.theme.sizes.mobileLarge}) {
					font-size: 1.5rem;
					padding: 5px 10px;
				}
			}
		}
	}
`;

export default HomePageStyled;
