#MINI-PROJECT: GET YOUTUBE CHANNEL'S ID for scraping data

## What do I want?
I want to fetch Channel's ID. I tried with **LETPHIL**. Yay!

## Input and Output
Input : Channel's Name
Output : Channel's ID

## What I needed.
I needed Google API, so made one. 
I put .env file and put the API_KEY there.
I put .gitignore to ignore this .env when I pushed it to the git.

I went over the API document, not knowing exactly what to do.
AI wasn't helpful. Over 10 minutes of struggle, I noticed that the way to reach the route is using Channels.List, which means I need to put channels? in the url. 

Instead of using const, I used let for the url, because in fact, other than this practice, I spent the whole day scraping all videos from different channel's playlist, use NextPageToken (which seems a nice way, but extremely difficult to produce it at the moment without help of prior codes), and fetch all the scripts from each URL so that I can ask GPT-4o-mini to summarize the results and save the data in short snippets. 

BOTTOM LINE: Since we are using Javascript, I got used to node.js. You need to use ***youtubei*** node package. Other packages don't support because it keeps throwing empty arrays for transcript. I felt so frustrated by the fact that empty arrays keep popping out. 

I will put it up later on, if necessary. Anyway, you fetch the Channel's ID yourself, too. It's fun.