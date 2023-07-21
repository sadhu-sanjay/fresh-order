export function _calculate_image_size(maxWidth: number, originalWidth: number, originalHeight: number ): { newWidth: number, newHeight: number } {
    let aspectRatio = originalHeight / originalWidth;
    
    let newWidth = maxWidth * 0.8
    let newHeight = newWidth * aspectRatio;

    return { newWidth, newHeight };
}
