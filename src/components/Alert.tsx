// Goal: Alert w/ message on button click

export default function Alert({
	alertMessage,
	buttonMessage,
}: { alertMessage: string; buttonMessage: string }) {
	function sendAlert() {
		return alert(alertMessage);
	}

	return (
		<div className="p-2 my-2 border-green-700 border h-fit w-full flex justify-center items-center">
			<button onClick={sendAlert} type="button">
				{buttonMessage}
			</button>
		</div>
	);
}
