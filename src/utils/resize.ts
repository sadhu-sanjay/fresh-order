export function _calculate_image_size(maxWidth: number, originalWidth: number, originalHeight: number ): { newWidth: number, newHeight: number } {
    let aspectRatio = originalHeight / originalWidth;
    
    let newWidth = maxWidth;
    let newHeight = newWidth * aspectRatio;

    return { newWidth, newHeight };
}
