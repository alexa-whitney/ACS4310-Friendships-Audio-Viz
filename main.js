// --------------------Canvas-------------------------------// 

// Get reference to the canvas context for use by the 
// renderers below
const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')


// -------------------Buttons-------------------------------//
const playButton = document.getElementById('button-play')
const pauseButton = document.getElementById('button-pause')

playButton.addEventListener('click', (e) => {
	startAudio()
})

pauseButton.addEventListener('click', (e) => {
	audio.pause()
})


// ----------------Audio Setup-----------------------------//

// Defime some variables 
let analyser
let frequencyArray
let audio

// Starts playing the audio
function startAudio() {
	// make a new Audio Object
	audio = new Audio()
	// Get a context 
	const audioContext = new (window.AudioContext || window.webkitAudioContext)()

	// Define a source sound file 
	audio.src = 'Friendships-Pascal-Letoublon.mp3'

	// Make a new analyser
	analyser = audioContext.createAnalyser()
	// Connect the analyser and the audio
	const source = audioContext.createMediaElementSource(audio)
	source.connect(analyser)
	analyser.connect(audioContext.destination)

	// Get an array of audio data from the analyser
	frequencyArray = new Uint8Array(analyser.frequencyBinCount)
	// console.log(frequencyArray.length)

	// Start playing the audio
	audio.play()

	requestAnimationFrame(render)
}

// ----------------Render Function-----------------------------//

function render() {
	// Calculate the center coordinates and radius of the visualization
	const centerX = canvas.width / 2;
	const centerY = canvas.height / 2;
	const radius = Math.min(centerX, centerY);

	// Get the audio frequency data from the analyser
	analyser.getByteFrequencyData(frequencyArray);

	// Clear the canvas for each frame
	ctx.clearRect(0, 0, canvas.width, canvas.height);

	// Calculate the width of each bar and the spacing between them
	const barWidth = Math.ceil(canvas.width / frequencyArray.length);
	const barSpacing = 2;

	// Loop through each frequency data point
	for (let i = 0; i < frequencyArray.length; i++) {
		// Calculate the height of the bar based on the frequency intensity
		// 255 is considered "peak volume"
		const barHeight = (frequencyArray[i] / 255) * canvas.height;

		// Calculate the x and y coordinates of the bar
		const x = (barWidth + barSpacing) * i;
		const y = canvas.height - barHeight;

		// Calculate the color of the bar based on the frequency intensity
		// By multiplying intensity by 360, the value is scaled to the full range of hues in the HSL color model
		const intensity = frequencyArray[i] / 255;
		const hue = intensity * 360;
		const saturation = 100;
		const lightness = 50;

		const color = `hsl(${hue}, ${saturation}%, ${lightness}%)`;

		// Set the fill style of the bar
		ctx.fillStyle = color;

		// Draw the bar as a rectangle
		ctx.fillRect(x, y, barWidth, barHeight);

		// Add particle effect
		const particleCount = Math.floor(barHeight / 10); // Adjust particle count based on bar height

		// Loop through each particle in the bar
		for (let j = 0; j < particleCount; j++) {
			// Generate random coordinates and properties for each particle
			const particleX = x + Math.random() * barWidth;
			const particleY = y + Math.random() * barHeight;
			const particleRadius = Math.random() * 3 + 1;
			const particleColor = `rgba(${hue}, ${saturation}%, ${lightness}%, ${Math.random()})`;

			// Begin drawing the particle
			ctx.beginPath();
			ctx.arc(particleX, particleY, particleRadius, 0, Math.PI * 2);
			ctx.fillStyle = particleColor;
			ctx.fill();
		}
	}

	// Set up the next animation frame
	requestAnimationFrame(render);
}
