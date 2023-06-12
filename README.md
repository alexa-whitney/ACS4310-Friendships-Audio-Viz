# Audio Visualization - "Friendships" by Pascal Letoublon

This project provides a vibrant, immersive audio visualization for the song "Friendships" by Pascal Letoublon. It transforms the audio experience into a dynamic, multi-colored soundscape.

![Screenshot](https://i.imgur.com/LjcXHUk.png)

## Table of Contents

1. [Introduction](#introduction)
2. [Questions Answered by the Visualization](#questions-answered-by-the-visualization)
3. [Installation](#installation)
3. [Usage](#usage)
4. [Technical Information](#technical-information)


## Introduction

This project uses JavaScript and HTML5 Canvas to analyze the frequency data of the song "Friendships" by Pascal Letoublon and create a real-time "static channel equalizer" visualization of the audio.

## Questions Answered by the Visualization

1. **What are the frequency characteristics of the sound?** By visualizing the frequency spectrum, you can get a sense of the tonal characteristics of the sound.
2. **What is the dynamic range of the audio?** Visualizations can help you see the range between the quietest and loudest parts of a sound, which is important in audio mixing and mastering.
3. **Are there any specific patterns in the audio?** Certain types of sounds or music might have specific, recognizable patterns that can be visually identified.


## Setup and Installation

### Prerequisites

- Basic knowledge of JavaScript, HTML, and CSS
- A modern web browser that supports Web Audio API
- A local web server (for development)

### Installation

1. Clone this repository to your local machine.
    ```bash
    git clone https://github.com/alexa-whitney/ACS4310-Friendships-Audio-Viz.git
    ```
2. Ensure you have a modern web browser installed (e.g., Google Chrome, Mozilla Firefox).
3. Open the `index.html` file in your web browser.

## Usage

Open the `index.html` file in your web browser and press the 'Play' button to start the song and initiate the audio visualization. You should see a visual representation of the song "Friendships" by Pascal Letoublon. 

## Technical Information

The audio visualizer leverages the Web Audio API's AnalyserNode interface to capture frequency and waveform data from the audio source. It then uses this data to draw in time with the music. The color of the visuals are dynamically generated based on the frequency data, resulting in a multi-colored, ever-changing display.

Enjoy the journey through a visualized soundscape with "Friendships"!

