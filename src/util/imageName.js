export const imageName = (image) => {

    const lastIndex = image.split('/').length - 1;
    const imageName = image.split('/')[lastIndex].split('.')[0];

    return imageName;
}