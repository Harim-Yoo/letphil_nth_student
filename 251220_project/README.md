## Fetching Texts from PDF
I noticed that there are two possible methods of fetching data.
One can read it directly from file-system in-built module and change the buffer into string so that we can read. 
Or, one can try using PDF-Parse npm library that enables user to parse texts.

### Issues I found
#1. If you try PDF-Parse, we keep getting \n or \t, which is not so great for math problems.
* This gives me an idea of updating the latex-cleaner function I shared in NPM to add \t to be deleted as well. Not sure when I will update, but will update it soon.

#2. Graphs go crazy in this part. I am uncertain whether I understood how to use this library well.
#3. Fractions would cause the similar problem as well. (This is my assumption, though).

