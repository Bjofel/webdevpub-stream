
<link href="https://fonts.googleapis.com/css?family=Archivo+Black" rel="stylesheet" type="text/css">


<script>

import { dispatch_dev } from "svelte/internal";
import {movieDesc, movieName, moviePubDate, moviePoster, video_player_is_active, movieCast} from "./stores.js"
	
</script>



<div id="descContainer">

	<!-- Top bar where title goes -->
	<div id="topBar">
		<h2 id="name">{$movieName}</h2>
	</div>

	<!-- Movie Poster Holder -->
	<div id="posterHolder">
		<img id="poster" src={$moviePoster} alt="error">
	</div>
	<p id="Cast">Cast: {$movieCast}</p>

	<!-- Description of movie -->
	<p id="desc">Description: {$movieDesc}</p>

	<!-- Publication of movie -->
	<p id="pubDate">{$moviePubDate}</p>

	<!-- Play button to enter cinema mode -->
	<div id="playButton"><svg id="svgIcon" on:click={() => {
		$video_player_is_active = true
		}}>
			<circle cx="50" cy="50" r="30" stroke="white" stroke-width="4" fill="none" />
			<polygon transform='translate(20 0)' fill="white" points="0,50 50,25 50,75, 100" />

		</svg></div>
</div>
	

<style>
	#descContainer {
		border-radius: 20px;
		background-color: #232931;
		position: relative;
		height: 80vh;
		width: 80vw;
        box-shadow: 0 10px 20px rgba(0,0,0,0.05), 0 6px 6px rgba(0,0,0,0.25);    

	}

	#topBar {
		background: #EE2B47;
		height: 15vh;
		border-top-right-radius: 20px;
		border-top-left-radius: 20px;
		margin: auto;
	}

	

	#playButton {
		box-sizing: border-box	;	
		position: absolute;
		z-index: 10;
		left: 5.75vw;
		top: 32vh;
		opacity: 60%;
		height: 100px;
		width: 100px;
		cursor: pointer;

	}
	#playButton:hover {
		opacity: 100%;
	}

	#svgIcon {
		
		width: 100%;
		height: 100%;
	}


	
	#name {
		font-family: "Archivo black";
		color: white;
		text-align: center;
		padding-top: 3.75vh;
		}

	#desc {
		color: white;
		position: absolute;
		left: 24vw;
		top: 21vh;
		width: 50vw;
	}
	#pubDate {
		position: absolute;
		color: white;
		left: 24vw;
		top: 60vh;
	}

	#posterHolder {
		box-sizing: border-box;
		width: 13vw;
		height: 40vh;	
		position: absolute;
		z-index: 0;
		left: 2vw;
		top: 20vh;

	}

	#Cast {
		color: white;
		position: absolute;
		left: 24vw;
		top: 50vh;
	}

	#poster {
		background-color: var(--netflix-red-opacity);
        border: 1px solid var(--netflix-red);
		background-size: cover;
		max-width: 100%;
 		max-height: 100%;
		display: block;
		box-shadow: 0 10px 20px rgba(0,0,0,0.05), 0 6px 6px rgba(0,0,0,0.25);    

	}

	@media (max-width: 1200px){ 

		#descContainer {
			width: 90vw;
		}

		#playButton {
			left: 10.75vw;
		}

		#Cast {
			font-size: 24px;
			top: 60vh;	
			left: 4vw;
			width: 30vw;
		}

		#pubDate {
			font-size: 24px;
			top: 55vh;
			left: 4vw;
		}

		#desc {
			font-size: 24px;
			left: 40vw;
		}

		#posterHolder {
			width: 30vw;
			height: 31vh;

		}


	}

	
	@media (max-width: 600px){ 

    
		#name {
			font-size: 20px;
		}   
		#posterHolder {
			width: 37vw;
		}
		#desc {
			font-size: 12px;			
    
	
		}

		#pubDate {
			font-size: 12px;			

		}

		#Cast {
			font-size: 12px;			

		}
	#playButton {
		left: 7.75vw;
		top: 25vh
	}
	
		


    }
</style>
