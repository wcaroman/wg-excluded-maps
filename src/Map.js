import React from 'react'
import Context from './context'

function MapHover( {name, img} ) {
	const { exclude } = React.useContext(Context)
	return (
		<div className="maphover overlay">
			<div className="maphoverbg overlay"></div>
			<div className="maphoverbuttonwrapper">&nbsp;</div>
			<div className="maphovertext">Исключить карту<br/><span style={{fontWeight: 'bold'}}>«{name}»</span>?</div>
			<div className="maphoverbuttonwrapper">
				<button className="maphoverbutton" onClick={() => exclude(name, img)} >Исключить</button>
			</div>
		</div>
	)
}

function Map( {name, img, isExcluded, index} ){
	
	const mapblockstyles = { marginRight: '25px' }
	if ( index % 5 === 0 ) mapblockstyles.marginRight = 0
	if (isExcluded) mapblockstyles.borderColor = '#ba7028'
	
	const [isHover, setIsHover] = React.useState(false)
	
	const mapMouseEnter = (isExcluded) => {
		if (!isExcluded) setIsHover(true)
	}
	const mapMouseLeave = () => setIsHover(false)
	
	return (
		<>
			<div 
				className="mapblock" 
				style={mapblockstyles} 
				onMouseEnter={() => mapMouseEnter(isExcluded)}
				onMouseLeave={() => mapMouseLeave()}
			>
				{isHover 
					? <MapHover name={name} img={img} isHover={isHover} />
					: <div className="mapname">{name}</div>
				}
				<img className="mapimage" src={img} alt={name} />
				{isExcluded &&
					<img className="overlay" src="/excluded.png" alt="overlay" />
				}
			</div>
		</>
	)
}

export default Map 