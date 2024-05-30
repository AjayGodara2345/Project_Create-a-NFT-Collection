// Create a variable to hold your NFTs
let nftCollection = [];

// This function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT(name, artist, description, image) {
    const nft = {
        name: name,
        artist: artist,
        description: description,
        image: image
    };
    nftCollection.push(nft);
}

// Create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs() {
    nftCollection.forEach(nft => {
        console.log("Name: " + nft.name);
        console.log("Artist: " + nft.artist);
        console.log("Description: " + nft.description);
        console.log("Image: " + nft.image);
        console.log("------------------------");
    });
}

// Print the total number of NFTs we have minted to the console
function getTotalSupply() {
    console.log("Total Supply: " + nftCollection.length);
}

// Call your functions below this line
mintNFT("Mona Lisa", "Leonardo da Vinci", "A portrait of a woman", "monalisa.jpg");
mintNFT("Starry Night", "Vincent van Gogh", "A famous night sky painting", "starrynight.jpg");
mintNFT("The Scream", "Edvard Munch", "An iconic expressionist painting", "thescream.jpg");

listNFTs();
getTotalSupply();

