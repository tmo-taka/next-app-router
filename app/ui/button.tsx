type Props = {
    children: React.ReactNode;
    childClick: () => void;
}

export function Button(props: Props) {

    return (
        <button
            className='bg-cyan-700 text-white p-8'
            onClick={() => {
                props.childClick()
            }}
        >
            {props.children}
        </button>
    )
}