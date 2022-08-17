const maiorQueMedia = (x, y, z, media = (x+y+z)/3) => {
    if ((x && y > media) || (x && z > media) || (y && z > media)) {return 2}
    else if (x > media || y > media || z > media) {return 1}
    else {return 0}
}

const x = 3
const y = 5
const z = 9

console.log(maiorQueMedia(x, y, z) + ' é/são maiores que a média')