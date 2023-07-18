// Resize image 
import test from '~/assets/images/hero.avif'

export function _calculate_image_size(clientWidth: number, originalWidth: number, originalHeight: number, type: string) {
    
    const canvas = Math.round(40 * clientWidth / 100)

    if (originalWidth >= canvas) {
        const maxWidth = canvas
        const maxHeight = Math.round(55 * clientWidth / 100)
        var ratio = 0;  // Used for aspect ratio
        var width = originalWidth;    // Current image width
        var height = originalHeight;  // Current image height

        let newWidth = maxWidth;
        let newHeight = maxWidth;

        if (width > maxWidth && width > height) {
            ratio = width / height;
            newHeight = maxWidth / ratio;
            newWidth = maxWidth

        } else if (height > maxHeight && height > width) {
            ratio = height / width;
            newWidth = maxHeight / ratio
            newHeight = maxHeight;
        }

        if (type === 'width') {
            return newWidth
        } else {
            return newHeight
        }
    }
    return originalWidth
}