type Props = {
    children: React.ReactNode;
    childClick: () => void;
}

export function Button(props: Props) {

    return (
        <button
            className="bg-cyan-700 p-8 text-white"
            type="button"
            onClick={() => {
                props.childClick()
            }}
        >
            {props.children}
        </button>
    )
}