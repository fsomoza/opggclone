const titulos = ['lol', 'si', 'keh'];

const Titles = (props) => {
	const elements = titulos.map((element, idx) => {
		return <h3 id={`title${idx}`} key={`title${idx}`}>{element}</h3>;
	});

	return <div>{elements}</div>;
};

export default Titles;