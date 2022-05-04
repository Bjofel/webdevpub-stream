<link href="https://fonts.googleapis.com/css?family=Archivo+Black" rel="stylesheet" type="text/css">


<script>
    import { Button, Overlay } from "svelte-materialify";
    import Player from "./Player.svelte";
    import colors from "svelte-materialify/src/utils/colors";
    import {movieDesc, movieName, moviePubDate, descScreen, moviePoster, video_player_is_active, movieSrc, screenHolder, movieCast} from "./stores.js"
    import Description from "./Description.svelte";

    let is_fullscreen = false;
</script>

<main>
    <div id="flexContainer">
            <!-- Top bar HTML -->
        <div id="topBar">
            <h1 id="title" class="grid-item">Reelix</h1>
            <div class="dropdown grid-item">Categories
                <button class="dropbtn"></button>
                <div id="dropdown-content">
                <a href="#topPicks">Top Picks</a>
                <a href="#Comedy">Comedy</a>
                <a href="#Action">Action</a>
                <a href="#Horror">Horror</a>
                <a href="#Drama">Drama</a>
                <a href="#Classic">True Stories</a>
                <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" target="_blank" >uncategorized</a>
                </div>
              </div>
            
        </div>
        <!-- Main page HTML -->
        <div id="mainPage">
            <!-- Categories -->
            <div class="categories">
                <!-- Top pick category with a tile -->
                <h2 class="catagoryTitles">Top Picks</h2>
                <!-- Row with content -->
                <div>
                    <div class="scrollmenu">
                        {#each Array(10) as _, i}

                        <div id="topPicks"
                            class="videoProperties"
                      
                            on:click={() => {
                            $movieName = "The Batman"
                            $moviePubDate = "Published: 2022"
                            $movieCast = "Robert Pattison, Zoë Kravitz, Paul Dano"
                            $movieDesc = "When the Riddler, a sadistic serial killer, begins murdering key political figures in Gotham, Batman is forced to investigate the city's hidden corruption and question his family's involvement."
                            $moviePoster = "https://image.tmdb.org/t/p/w500//74xTEgt7R36Fpooo50r9T25onhq.jpg"
                            $movieSrc = "https://movietrailers.apple.com/movies/wb/the-batman-2022/the-batman-trailer-2_i320.m4v"
                            $screenHolder = "https://sevat01rpweb1.uniquedigitalcinema.com/media/stills/2380/1920/7e6ff3ca-2c02-4ccf-b50b-6c8f958e1564.jpg"
                            $descScreen = true
                            }}
                        ><img id="propImg" src="https://image.tmdb.org/t/p/w500//74xTEgt7R36Fpooo50r9T25onhq.jpg" alt="Error">
                
                </div>
                {/each}
                    </div>
                </div>
                
                <h2 id="Comedy" class="catagoryTitles">Comedy</h2>
                <div >
                    <div class="scrollmenu">
                        {#each Array(10) as _, i}
                        
                        <div 
                            class="videoProperties"
                            on:click={() => {
                            $movieName = "Zombieland: Double tap"
                            $moviePubDate = "Published: 2019"
                            $movieCast = "Woody Harrelson, Jesse Eisenberg, Emma Stone"
                            $movieDesc = " Zombieland: Double Tap. In the sequel where the comic mayhem stretches from the White House and through the heartland, these four slayers must face off against the many new kinds of zombies that have evolved since the first movie, as well as some new human survivors. But most of all, they have to face the growing pains of their own snarky, makeshift family."
                            $moviePoster = "https://m.media-amazon.com/images/M/MV5BNDBkOTY5NzEtZmIxOC00YThlLWIyYTYtNWVlNjlhNTY3MzRiXkEyXkFqcGdeQXVyMDk2OTIwNQ@@._V1_FMjpg_UX472_.jpg"        
                            $movieSrc = "https://movietrailers.apple.com/movies/sony_pictures/zombieland-double-tap/zombieland-double-tap-trailer-1_i320.m4v"      
                            $screenHolder = "https://m.media-amazon.com/images/M/MV5BNDMyMDI0MmUtZTI3Mi00MTc5LWE4M2YtYTRkMDdhNzQ5ZmI2XkEyXkFqcGdeQXVyNzk5MDQ0NA@@._V1_FMjpg_UX1024_.jpg"
                            $descScreen = true
                            }}
                        ><img id="propImg" src="https://m.media-amazon.com/images/M/MV5BNDBkOTY5NzEtZmIxOC00YThlLWIyYTYtNWVlNjlhNTY3MzRiXkEyXkFqcGdeQXVyMDk2OTIwNQ@@._V1_FMjpg_UX472_.jpg" alt="Error"></div>
                {/each}
                </div>
                <!-- Horror category -->
                <h2 id="Horror" class="catagoryTitles">Horror</h2>  
                <div>
                    <div class="scrollmenu">
                        {#each Array(10) as _, i}

                        <div id="Horror"
                            class="videoProperties"
                            on:click={() => {
                            $movieName = "Willy's Wonderland"
                            $moviePubDate = "Published: 2020"
                            $movieCast = "Nicholas Cage, Emily Tosta, Beth Grant"
                            $movieDesc = "A quiet drifter is tricked into a janitorial job at the now condemned Willy's Wonderland. The mundane tasks suddenly become an all-out fight for survival against wave after wave of demonic animatronics. Fists fly, kicks land, titans clash -- and only one side will make it out alive."  
                            $moviePoster = "https://m.media-amazon.com/images/M/MV5BNWEyNDgxYmQtOWM3Mi00M2VkLWJkZmEtNDAzNDNkOGY5MDMwXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg"         
                            $movieSrc = "https://movietrailers.apple.com/movies/independent/willys-wonderland/willys-wonderland-trailer-1_i320.m4v"
                            $screenHolder = "https://m.media-amazon.com/images/M/MV5BNWQ0M2E1ZDAtYzE1Mi00MTgxLWEyYzktOThhNTAzZGI2YmQzXkEyXkFqcGdeQXVyMTMyMTE3ODEy._V1_FMjpg_UX1200_.jpg"
                            $descScreen = true
                            }}
                        ><img id="propImg" src="https://m.media-amazon.com/images/M/MV5BNWEyNDgxYmQtOWM3Mi00M2VkLWJkZmEtNDAzNDNkOGY5MDMwXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg" alt="Error"></div>
                {/each}
            </div>
            <!-- Action Category -->
            <h2 id="Action" class="catagoryTitles">Action</h2>
                <div>
                    <div class="scrollmenu">
                        {#each Array(10) as _, i}

                        <div
                            class="videoProperties"
                            on:click={() => {
                            $movieName = "Mission Impossible: Fallout"
                            $moviePubDate = "Published: 2018"
                            $movieCast = "Tom Cruise, Henry Cavil, Ving Rhames, Simon pegg"
                            $movieDesc = "Two years after Ethan Hunt had successfully captured Solomon Lane, the remnants of the Syndicate have reformed into another organization called the Apostles. Under the leadership of a mysterious fundamentalist known only as John Lark, the organization is planning on acquiring three plutonium cores. Ethan and his team are sent to Berlin to intercept them, but the mission fails when Ethan saves Luther and the Apostles escape with the plutonium. With CIA agent August Walker joining the team, Ethan and his allies must now find the plutonium cores before it's too late."     
                            $moviePoster = "https://m.media-amazon.com/images/M/MV5BMjVmNzM2MWUtYzY3YS00NDc2LWI1MWUtNDk3NmMyNDEwNjA3XkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_.jpg"     
                            $movieSrc = "http://movietrailers.apple.com/movies/paramount/mission-impossible-fallout/mission-impossible-fallout-trailer-2_h1080p.mov"
                            $screenHolder = "https://m.media-amazon.com/images/M/MV5BMTc1NDE3OTU4OV5BMl5BanBnXkFtZTgwMzg5Nzc1NTM@._V1_.jpg"
                            $descScreen = true
                            }}
                        ><img id="propImg" src="https://m.media-amazon.com/images/M/MV5BMjVmNzM2MWUtYzY3YS00NDc2LWI1MWUtNDk3NmMyNDEwNjA3XkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_.jpg" alt="Error"></div>
                {/each}
            </div>
            <!-- Drama category -->
            <h2 id="Drama" class="catagoryTitles">Drama</h2>
                <div>
                    <div class="scrollmenu">
                        {#each Array(10) as _, i}

                        <div
                            class="videoProperties"
                            on:click={() => {
                            $movieName = "Sully"
                            $moviePubDate = "Published: 2016"
                            $movieCast = "Tom Hanks, Aaron Eckhart, Laura Linney"
                            $movieDesc = "On Thursday, January 15, 2009, the world witnessed the Miracle on the Hudson when pilot Chesley Sully Sullenberger glided his disabled plane onto the frigid waters of the Hudson River, saving the lives of all one hundred fifty-five aboard. However, even as Sully was being heralded by the public and the media for his unprecedented feat of aviation skill, an investigation was unfolding that threatened to destroy his reputation and his career."     
                            $moviePoster = "https://m.media-amazon.com/images/M/MV5BMTg5NTUwNDIyOV5BMl5BanBnXkFtZTgwMjI2OTc3OTE@._V1_.jpg";
                            $movieSrc = "https://movietrailers.apple.com/movies/wb/sully/sully-tlr1_i320.m4v"   
                            $screenHolder = "https://m.media-amazon.com/images/M/MV5BMTkwMDk5NTM5MF5BMl5BanBnXkFtZTgwNTQwMDQyMTI@._V1_FMjpg_UX1100_.jpg"
                            $descScreen = true
                            }}
                        ><img id="propImg" src="https://m.media-amazon.com/images/M/MV5BMTg5NTUwNDIyOV5BMl5BanBnXkFtZTgwMjI2OTc3OTE@._V1_.jpg" alt="Error"></div>
                {/each}
            </div>

            <h2 id="Classic" class="catagoryTitles">True Stories</h2>
                <div>
                    <div class="scrollmenu">
                        {#each Array(10) as _, i}

                        <div
                            class="videoProperties"
                            on:click={() => {
                            $movieName = "Hacksaw Ridge"
                            $moviePubDate = "Published: 2016"
                            $movieCast = "Andrew Garfield, Sam Worthington, Luke Bracey"
                            $movieDesc = "The true story of Desmond T. Doss, the conscientious objector who, at the Battle of Okinawa, was awarded the Medal of Honor for his incredible bravery and regard for his fellow soldiers. We see his upbringing and how this shaped his views, especially his religious view and anti-killing stance. We see Doss's trials and tribulations after enlisting in the US Army and trying to become a medic. Finally, we see the hell on Earth that was Hacksaw Ridge"     
                            $moviePoster = "https://m.media-amazon.com/images/M/MV5BMjQ1NjM3MTUxNV5BMl5BanBnXkFtZTgwMDc5MTY5OTE@._V1_FMjpg_UX971_.jpg"
                            $movieSrc = "https://movietrailers.apple.com/movies/summit/hacksawridge/hacksaw-ridge-trailer-1_i320.m4v"   
                            $screenHolder = "https://m.media-amazon.com/images/M/MV5BODEzODhmZjMtYzRhYy00OWUwLWIwYjgtOTkwNzlkYTA3MzdhXkEyXkFqcGdeQXVyNTc3MjUzNTI@._V1_.jpg"
                            $descScreen = true
                            }}
                        ><img id="propImg" src="https://m.media-amazon.com/images/M/MV5BMjQ1NjM3MTUxNV5BMl5BanBnXkFtZTgwMDc5MTY5OTE@._V1_FMjpg_UX971_.jpg" alt="Error"></div>
                {/each}
            </div>

        </div>
        
        <!-- Description screen -->
        <Overlay
            active={$descScreen}
        
        >
            <div id="descPage">
                <div id="close">
                    <Button
                    class="error-color"
                    size="small"
                    on:click={() => {
                        $descScreen = false;
                    }}
                >
                    Close
                </Button>

                <Description />
            </div>
            
        </Overlay>

        <!-- Video player -->
        <Overlay
            opacity={is_fullscreen ? 1 : 0.7}
            color="black"
            active={$video_player_is_active}
            on:click={() => {
                $video_player_is_active = false;
            }}
        >
            <div
                id="video"
                class:fullscreen={is_fullscreen == true}
                on:click={(e) => {
                    e.stopPropagation();
                }}
            >
                <div id="close">
                    <Button
                        class="error-color"
                        size="small"
                        on:click={() => {
                            $video_player_is_active = false;
                        }}
                    >
                        Close
                    </Button>
                </div>
                <div id="fullscreen">
                    <Button
                        size="small"
                        class="primary-color"
                        on:click={() => {
                            is_fullscreen = !is_fullscreen;
                            // do not focus the fullscreenbutton if clicked
                            // this is because otherwise clicking space will cause
                            // the video player to maximize/minimize instead of pause/play
                            // when space is clicked
                            if (document.activeElement != document.body)
                                document.activeElement.blur();
                        }}
                    >
                        {is_fullscreen ? "Minimize" : "Theatre Mode"}
                    </Button>
                </div>

                {#if is_fullscreen}
                    <div id="gigascreen">
                        <Button
                            size="small"
                            class="secondary-color"
                            on:click={() => {
                                // do not focus the fullscreenbutton if clicked
                                // this is because otherwise clicking space will cause
                                // the video player to maximize/minimize instead of pause/play
                                // when space is clicked
                                if (document.activeElement != document.body)
                                    document.activeElement.blur();

                                let div = document.getElementById("vid");
                                if (div.requestFullscreen) div.requestFullscreen();
                                else if (div.webkitRequestFullscreen)
                                    div.webkitRequestFullscreen();
                                else if (div.msRequestFullScreen)
                                    div.msRequestFullScreen();
                            }}
                        >
                            {"Gigascreen"}
                        </Button>
                    </div>
                {/if}

                <Player />
            </div>
        </Overlay>

    <src>
        
    </src>
    </div>
    

</main>

<style>

    

    :root {
        --netflix-red: #e50914;
        --netflix-red-opacity: rgba(229, 9, 20, 0.3);
    }

    :global(body) {
        padding: 0;
        margin: 0;

    }

    :global(html) {
        scroll-behavior: smooth;
    }

    .catagoryTitles {
        font-family: "Archivo Black";
        color: white;
        margin-top: 5vh;
        margin-bottom: 2vh;
        font-size: 2em;
    }
    

    .categories {
        padding-top: 100px;
        box-sizing: content-box;
    }


    div.scrollmenu {
        overflow: auto;
        white-space: nowrap;
}

    div.scrollmenu div {
    display: inline-block;
    color: rgb(0, 0, 0);
    text-align: center;
    text-decoration: none;
    margin-right: 20px;
    }

    .videoProperties {
        cursor: pointer;
        height: 50vh;
        background-color: red;
        box-sizing: border-box;
        background-size: cover; /* Resize the background image to cover the entire container */
}
    
        
    #propImg {
        border: 1px solid var(--netflix-red);
        position: static;
        z-index: -1;
        max-width: 100%;
        max-height: 100%;
    }

    #propImg:hover {
        box-shadow: inset 1px 1px 12px 200px black;        
        border: 2.5px solid var(--netflix-red);


    }



    
    /* Main part of page */
    main {
        min-height: 100vh;
        width: 100vw;
        background: #232931;
        padding-left: 5%;
        padding-right: 5%;
        box-sizing: border-box;

    }

    #flexContainer {
        box-sizing: border-box;
    }


    /* CSS for video player */
    #video {
        position: fixed;
        transition: all 0.3s ease-out;
        left: 15%;
        right: 15%;
        top: 15%;
        bottom: 15%;
    }

    #video.fullscreen {
        left: 0%;
        right: 0%;
        top: 0%;
        bottom: 0%;
    }

    #video.fullscreen #gigascreen {
        position: absolute;
        top: 10px; /* position the top  edge of the element at the middle of the parent */
        left: 50%; /* position the left edge of the element at the middle of the parent */

        transform: translate(-50%,  0);
        z-index: 100;
    }
    #video #close {
        position: absolute;
        top: -10px;
        right: -10px;
        z-index: 100;
    }

    #video #fullscreen {
        position: absolute;
        top: -10px;
        left: -10px;
        z-index: 100;
    }

    #video.fullscreen #close {
        position: absolute;
        top: 10px;
        right: 10px;
        z-index: 100;
    }

    #video.fullscreen #fullscreen {
        position: absolute;
        top: 10px;
        left: 10px;
        z-index: 100;
    }
    

    /* Top bar title CSS */
    #title {
        display: flex;
        color: white;
        font-family: "Archivo Black";

    }
    #topBar {
        display: inline-grid;
		grid-template-columns: auto auto auto auto auto;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        background: #EE2B47;
        height: 112px;
        box-shadow: 0 10px 20px rgba(0,0,0,0.05), 0 6px 6px rgba(0,0,0,0.25);    
    }

    .grid-item {
       
        font-size: 40px;
        text-align: center;
        box-sizing: border-box;
        align-items: center;
        justify-content: center;
    
    }



     /* Style The Dropdown Button */
     .dropbtn {
    color: white;
    border: none;
    cursor: pointer;
    }

    /* The container <div> - needed to position the dropdown content */
    .dropdown {
    position: relative;
    display: flex;
    color: white;
    font-family: "Archivo Black";
    }

    /* Dropdown Content (Hidden by Default) */
    #dropdown-content {
    display: none;
    position: absolute;
    top: 14vh;
    border-radius: 20px;
    background-color: #EE2B47;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;
    overflow: hidden;
    }

    /* Links inside the dropdown */
    #dropdown-content a {
    color: white;
    padding: 12px 16px;
    font-size: 20px;
    text-decoration: none;
    display: block;
    }

    /* Change color of dropdown links on hover */
    #dropdown-content a:hover {
        /* background-color: var(--netflix-red-opacity); */
        background-color: var(--netflix-red);
        box-shadow: 0 10px 20px rgba(0,0,0,0.05), 0 6px 6px rgba(0,0,0,0.25);    

    }

    /* Show the dropdown menu on hover */
    .dropdown:hover #dropdown-content {
    display: block;
    }    

    @media (max-width: 1200px) {
        .videoProperties {
            height: 25vh;
        }
    }

    @media (max-width: 600px){ 
        .videoProperties {
            height: 25vh;
        }
        
        .grid-item {
       
        font-size: 20px;
   
   }
       
    }

    /** https://onaircode.com/html-css-custom-scrollbar-examples/ */
    ::-webkit-scrollbar {
        position: relative;
        width: 15px;
        height: 15px;
    }
    ::-webkit-scrollbar-track {
        border-radius: 10px;
        background-color: #393E46;
    }
    ::-webkit-scrollbar-thumb {
        background-color: var(--netflix-red);
        border-radius: 10px;
    }

    

    
        
</style>
