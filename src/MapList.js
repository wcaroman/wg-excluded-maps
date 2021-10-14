import React from 'react'
import Map from './Map'

function MapList( { arrs, vars } ) {
	
	const [mapsShowed, sliderOffset, changeSliderOffset] = vars
	const [maps, excludedMaps] = arrs
	
	let index = 0
	const isShowScrollbar = mapsShowed > 10 ? 'block' : 'none',
		mapRows = Math.ceil( mapsShowed/5 ),
		scrollbarStyles = { display: isShowScrollbar },
		sliderSpeed = (485-35) / (mapRows-2)
	
	const scrollList = (e) => {
		if (mapsShowed > 10) {
			changeSliderOffset( () => {
				if (e.deltaY < 0 && Math.round(sliderOffset) > 0) return sliderOffset - sliderSpeed
				else if (e.deltaY > 0 && Math.round(sliderOffset) < (485-35) ) return sliderOffset + sliderSpeed
				else return sliderOffset
			})
		}
	}
	
	return (
		<div className="maplistWrapper" onWheel={e => scrollList(e)} >
			<ul className="maplist" style={ {top: Math.round(-sliderOffset/sliderSpeed*255)+"px"} } >
				{maps.map( map => {
					let isExcluded = false
					excludedMaps.map(excludedMap => { 
						if (map.name === excludedMap.name) isExcluded = true
						return excludedMap
					} )
					if (map.isShow) {
						index++
						return <Map key={map.id} index={index} name={map.name} img={map.img} isExcluded={isExcluded} />
					} else return null
				})}
			</ul>
			<div className="scrollbar" style={scrollbarStyles}>
				<div className="slider" style={ {top: Math.round(sliderOffset)+"px"} } ></div>
			</div>
		</div>
	)
}

export default MapList