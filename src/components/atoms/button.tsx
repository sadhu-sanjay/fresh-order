
export const Button = ({ text }: { text: string }) => {
    const classLocal = ``

    return (
        <button
            className={`btn-primary box-border w-full h-14 flex-row justify-center 
            items-center p-4 drop-shadow-xl overflow-visible content-center
            flex-nowrap gap-2.5 rounded-lg`}>
            {text}
        </button>
    )
}