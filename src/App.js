import React from 'react'
import Context from './context'
import MapList from './MapList'
import Filter from './Filter'
import Modal from './Modal'
import './index.css';

function App() {
	
	const [maps, setMaps] = React.useState([
		{id: 1, img: 'http://static.wotbase.net/img/maps/300/19_monastery.jpg', name: 'Abbey', type: 'summer', isShow: true},
		{id: 2, img: 'http://static.wotbase.net/img/maps/300/31_airfield.jpg', name: 'Airfield', type: 'desert', isShow: true},
		{id: 3, img: 'http://static.wotbase.net/img/maps/300/18_cliff.jpg', name: 'Cliff', type: 'summer', isShow: true},
		{id: 4, img: 'http://static.wotbase.net/img/maps/300/29_el_hallouf.jpg', name: 'El Halluf', type: 'desert', isShow: true},
		{id: 5, img: 'http://static.wotbase.net/img/maps/300/59_asia_great_wall.jpg', name: "Empire's Border", type: 'summer', isShow: true},
		{id: 6, img: 'http://static.wotbase.net/img/maps/300/06_ensk.jpg', name: 'Ensk', type: 'summer', isShow: true},
		{id: 7, img: 'http://static.wotbase.net/img/maps/300/13_erlenberg.jpg', name: 'Erlenberg', type: 'winter', isShow: true},
		{id: 8, img: 'http://static.wotbase.net/img/maps/300/36_fishing_bay.jpg', name: "Fisherman's Bay", type: 'summer', isShow: true},
		{id: 9, img: 'http://static.wotbase.net/img/maps/300/33_fjord.jpg', name: 'Fjords', type: 'summer', isShow: true},
		{id: 10, img: 'http://static.wotbase.net/img/maps/300/95_lost_city_ctf.jpg', name: 'Ghost Town', type: 'desert', isShow: true},
		{id: 11, img: 'http://static.wotbase.net/img/maps/300/115_sweden.jpg', name: 'Glacier', type: 'winter', isShow: true},
		{id: 12, img: 'http://static.wotbase.net/img/maps/300/45_north_america.jpg', name: 'Highway', type: 'summer', isShow: true},
		{id: 13, img: 'http://static.wotbase.net/img/maps/300/04_himmelsdorf.jpg', name: 'Himmeldorf', type: 'summer', isShow: true},
		{id: 14, img: 'http://static.wotbase.net/img/maps/300/222_er_clime.jpg', name: 'Hinterland', type: 'summer', isShow: true},
		{id: 15, img: 'http://static.wotbase.net/img/maps/300/01_karelia.jpg', name: 'Karelia', type: 'summer', isShow: true},
		{id: 16, img: 'http://static.wotbase.net/img/maps/300/83_kharkiv.jpg', name: 'Kharkiv', type: 'winter', isShow: true},
		{id: 17, img: 'http://static.wotbase.net/img/maps/300/217_er_alaska.jpg', name: 'Klondike', type: 'winter', isShow: true},
		{id: 18, img: 'http://static.wotbase.net/img/maps/300/209_wg_epic_suburbia.jpg', name: 'Kraftwerk', type: 'winter', isShow: true},
		{id: 19, img: 'http://static.wotbase.net/img/maps/300/07_lakeville.jpg', name: 'Lakeville', type: 'summer', isShow: true},
		{id: 20, img: 'http://static.wotbase.net/img/maps/300/44_north_america.jpg', name: 'Live Oaks', type: 'summer', isShow: true},
		{id: 21, img: 'http://static.wotbase.net/img/maps/300/02_malinovka.jpg', name: 'Malinovka', type: 'summer', isShow: true},
		{id: 22, img: 'http://static.wotbase.net/img/maps/300/38_mannerheim_line.jpg', name: 'Mannerheim Line', type: 'winter', isShow: true},
		{id: 23, img: 'http://static.wotbase.net/img/maps/300/10_hills.jpg', name: 'Mines', type: 'summer', isShow: true},
		{id: 24, img: 'http://static.wotbase.net/img/maps/300/90_minsk.jpg', name: 'Minsk', type: 'summer', isShow: true},
		{id: 25, img: 'http://static.wotbase.net/img/maps/300/37_caucasus.jpg', name: 'Mountain Pass', type: 'summer', isShow: true},
		{id: 26, img: 'http://static.wotbase.net/img/maps/300/11_murovanka.jpg', name: 'Murovanka', type: 'summer', isShow: true},
		{id: 27, img: 'http://static.wotbase.net/img/maps/300/212_epic_random_valley.jpg', name: 'Nebelburg', type: 'summer', isShow: true},
		{id: 28, img: 'http://static.wotbase.net/img/maps/300/208_bf_epic_normandy.jpg', name: 'Normandie', type: 'summer', isShow: true},
		{id: 29, img: 'http://static.wotbase.net/img/maps/300/101_dday.jpg', name: 'Overlord', type: 'summer', isShow: true},
		{id: 30, img: 'http://static.wotbase.net/img/maps/300/112_eiffel_tower_ctf.jpg', name: 'Paris', type: 'summer', isShow: true},
		{id: 31, img: 'http://static.wotbase.net/img/maps/300/114_czech.jpg', name: 'Pilsen', type: 'summer', isShow: true},
		{id: 32, img: 'http://static.wotbase.net/img/maps/300/05_prohorovka.jpg', name: 'Prohorovka', type: 'summer', isShow: true},
		{id: 33, img: 'http://static.wotbase.net/img/maps/300/03_campania_big.jpg', name: 'Province', type: 'summer', isShow: true},
		{id: 34, img: 'http://static.wotbase.net/img/maps/300/34_redshire.jpg', name: 'Redshire', type: 'summer', isShow: true},
		{id: 35, img: 'http://static.wotbase.net/img/maps/300/08_ruinberg.jpg', name: 'Ruinberg', type: 'summer', isShow: true},
		{id: 36, img: 'http://static.wotbase.net/img/maps/300/28_desert.jpg', name: 'Sand River', type: 'desert', isShow: true},
		{id: 37, img: 'http://static.wotbase.net/img/maps/300/47_canada_a.jpg', name: 'Serene Coast', type: 'summer', isShow: true},
		{id: 38, img: 'http://static.wotbase.net/img/maps/300/14_siegfried_line.jpg', name: 'Siegfried Line', type: 'summer', isShow: true},
		{id: 39, img: 'http://static.wotbase.net/img/maps/300/35_steppes.jpg', name: 'Steppes', type: 'summer', isShow: true},
		{id: 40, img: 'http://static.wotbase.net/img/maps/300/99_poland.jpg', name: 'Studzianki', type: 'summer', isShow: true},
		{id: 41, img: 'http://static.wotbase.net/img/maps/300/63_tundra.jpg', name: 'Tundra', type: 'summer', isShow: true},
		{id: 42, img: 'http://static.wotbase.net/img/maps/300/23_westfeld.jpg', name: 'Westfield', type: 'summer', isShow: true},
		{id: 43, img: 'http://static.wotbase.net/img/maps/300/17_munchen.jpg', name: 'Widepark', type: 'summer', isShow: true}
	])
	
	let mapsTotal = 0, mapsShowed = 0
	maps.map( map => {
		if (map.isShow) mapsShowed++
		mapsTotal++
		return map
	})
	
	const [filters, setFilters] = React.useState( [
		{id: 0, type: 'summer', isPicked: false},
		{id: 1, type: 'winter', isPicked: false},
		{id: 2, type: 'desert', isPicked: false}
	])
	
	const [sliderOffset, changeSliderOffset] = React.useState(0)
	
	let isFiltersApplied = false
	for (const filter of filters) {
		if (filter.isPicked) isFiltersApplied = true
	}
	
	const pickFilter = (id, type) => {
		setFilters(
			filters.map(filter => {
				if (filter.id === id) filter.isPicked = !filter.isPicked
				return filter
			})
		)
		
		let isFiltersApplied = false
		for (const filter of filters) {
			if (filter.isPicked) isFiltersApplied = true
		}
		
		setMaps(
			maps.map(map => {
				if (isFiltersApplied) {
					for (const filter of filters) {
						if (filter.type === map.type) {
							filter.isPicked ? map.isShow = true : map.isShow = false
						} 
					}
				} else map.isShow = true
				return map
			})
		)
		changeSliderOffset(0)
	}
	
	const filterReset = () => {
		setFilters(
			filters.map(filter => {
				filter.isPicked = false
				return filter
			})
		)
		
		setMaps(
			maps.map(map => {
				map.isShow = true
				return map
			})
		)
		changeSliderOffset(0)
	}
	
	const [isShowModal, setIsShowModal] = React.useState(false)
	const [nameToExclude, setNameToExclude] = React.useState('')
	const [imgToExclude, setImgToExclude] = React.useState('')
	const [excludedMaps, setExcludedMaps] = React.useState([
		{name: 'Abbey', img: 'http://static.wotbase.net/img/maps/300/14_siegfried_line.jpg'}
	])
	
	const exclude = (name, img) => {
		setIsShowModal(true)
		setNameToExclude(name)
		setImgToExclude(img)
	}
	
	const approveExclude = (name, img) => {
		if (excludedMaps.length === 2) setExcludedMaps ( excludedMaps.pop() )
		
		setExcludedMaps(
			excludedMaps.concat([
				{name, img}
			])
		)
		setIsShowModal(false)
	}
	
	const cancelExclude = () => setIsShowModal(false)
	
	const include = (name) => {
		setExcludedMaps(
			excludedMaps.filter(map => map.name !== name)
		)
	}
	
	return (
		<Context.Provider value={{ pickFilter, exclude }}>
			<header>
				<div className="backbuttonWrapper"><span className="backbutton">&lt; НАЗАД</span><span> К СТАТУСУ АККАУНТА</span></div>
				<h2>Исключённые карты <span className="info">Ⓘ</span></h2>
				<div></div>
			</header>
			<Filter 
				arrs={ [filters, excludedMaps] } 
				vars={ [mapsShowed, mapsTotal, isFiltersApplied] } 
				funcs={ [filterReset, include] } 
			/> 
			<MapList arrs={ [maps, excludedMaps] } vars={ [mapsShowed, sliderOffset, changeSliderOffset] } />
			
			{isShowModal && 
				<Modal nameToExclude={nameToExclude} imgToExclude={imgToExclude} funcs={ [approveExclude, cancelExclude] }/>
			}
		</Context.Provider> 
	)
}

export default App;





