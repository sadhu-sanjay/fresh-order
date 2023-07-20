
interface Asset {
    id: string,
    nm: string,
    direction: string,
    color: string,
    size: string,
    [key: string]: Array<Design> | string
}

interface Design {
    id: string
    preview: string,
    asset: string,
    position: {
        width: number,
        height: number,
        isDraggable: boolean,
        x: number,
        y: number,
    }
}

