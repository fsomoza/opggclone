import { Fragment } from 'react';
import Titles from './components/Titles';
// los componentes de react deben de devolver una unica etiqueta
const App = () => (
	<>
		{/* nuestros componentes tienen que empezar por mayuscula
			si ponemos "titles" , busca en las etiquetas de React por defecto
		     */}
		<Titles></Titles>
	</>
);

export default App;