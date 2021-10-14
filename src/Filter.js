import React from 'react'
import Context from './context'

function FilterItem({ type, isPicked, index}){
	
	const { pickFilter } = React.useContext(Context)
	
	return (
		<img 
			className="filterItem"
			src={'/'+type + (isPicked ? '_picked' : '') + '.png'}
			onClick={() => pickFilter(index, type)}
			alt={type+' maps'}
		/>
	)
}

function Filter( {arrs, vars, funcs} ){
	
	const [mapsShowed, mapsTotal, isFiltersApplied] = vars
	const [filterReset, include] = funcs
	const [filters, excludedMaps] = arrs
	
	return ( 
		<div className="filterWrapper">
			<div className="counter">
				<div className="counterText">
					<span style={{marginRight: '.3rem'}}>Показано карт:</span>
					<span className="mapsShowed"> {mapsShowed}</span>
					{ isFiltersApplied &&
						<><span>/{mapsTotal}</span><span className="filterReset" onClick={filterReset}></span></>
					}
				</div>
				{ isFiltersApplied && 
					<div className="counter_highlight">
						<img alt="counter_highlight" src="/counter_highlight.png" />
					</div>
				}
			</div>
			
			<div className="excluded">
			{excludedMaps.map( (map, index) => {
				return (
					<div className="excludedMap" key={index} >
						<img src={map.img} alt={map.name} />
						<div><center>{map.name}</center></div>
						<div className="mapreset" onClick={ () => include(map.name) }></div>
					</div>
				)
			})}
			</div>
			
			<div className="filter">
				<span>Типы карт:</span>
				{filters.map( (filter, index) => {
					return (
						<FilterItem 
							type={filter.type} 
							isPicked={filter.isPicked} 
							key={index}
							index={index}
						/>
					)
				})}
			</div>
		</div>
	)
}

export default Filter