
/* const VideoList = ({title, children}) =>{ 

    const videos = children || <p>No hay videos</p>

	 return(
        <div>
            <h1>{title}</h1>
            {videos}
        </div>
    )
}; */

/* como no contiene logica las llaves despues de la 
flecha y el return no son necesarios */

const VideoList = ({ title, children }) => (
	<div>
		<h1>{title}</h1>
		{children || <p>No hay videos</p>}
	</div>
);

export default VideoList;
