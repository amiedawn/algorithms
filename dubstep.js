// Assume a song consists of some number of words that don't contain WUB.
// To make the dubstep remix of this song, Joe inserts a certain number 
// of words "WUB" before the first word fo the song (the number may be zero),
// after the last word (the number may be zero), and between words (at least
// 1 between any pair of neighboring words), and then Joe glues together
// all the words, including "WUB", in 1 string and plays the song in the club.)

// Ex: a song with words "I am X" can transform into a dubstep mix as 
//"WUBWUBIWUBAMWUBWUBX", but cannot transform into "WUBWUBIAMWUBX".

// Help Joe restore the original song.

// Input: The input consists of a single non-empty string, consisting only
// of uppercase English letters, the string's length doesn't exceed 200 characters

const songDecoder = (song) => {
    // return song.replaceAll("WUB", " ").trim(); // leaves 2 spaces in place of 2 WUBs
    //return song.replace(/WUB/g, " ");
    return song.replace(/(WUB)+/g, " ").trim(); // replaceAll also works; to rid 2 spaces, need regex and wub in ()+
                                                // trim removes leading and trailing spaces   
};
song = "WUBWUBIWUBAMWUBWUBX";
console.log(songDecoder(song));
