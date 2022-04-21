export const IMAGE_PRESETS = {
  preload: 'preload', // (10)*
  small_square: 'small_square', // (75x75)
  large_square: 'large_square', // (150x150)
  thumbnail: 'thumbnail', // (100)*
  small: 'small', // (240)*
  small320: 'small320', // (320)*
  medium: 'medium', // (500)*
  medium640: 'medium640', // (640)*
  medium800: 'medium800', // (800)*
  large: 'large', // (1024)*
  large1600: 'large1600', // (1600)*
  large2048: 'large2048', // (2048)*
  avatar: 'avatar', // (150x150)
  original: 'original', // original - original image file
  download: 'download' // download - forces the browser to download the file
  // * : keeps original image proportions, size of longest side
}
