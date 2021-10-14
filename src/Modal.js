import React from 'react'

function Modal( {nameToExclude, imgToExclude, funcs} ) {
	
	const [approveExclude, cancelExclude] = funcs
	
	return (
		<div className="modalwrapper overlay">
			<div className="modalbg overlay"></div>
			<div className="modal">
				<div className="modalbuttons"></div>
				<div className="modaltext">Вы действительно хотите<br/>исключить карту «{nameToExclude}»?</div>
				<div className="modalbuttons">
					<button onClick={() => approveExclude(nameToExclude, imgToExclude)}>Да</button>
					<button onClick={() => cancelExclude()}>Отмена</button>
				</div>
			</div>
		</div>
	)
}

export default Modal