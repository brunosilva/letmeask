type ButtonProps = {
    city: string;
    uf: string;
}

export function Button(props: ButtonProps){
    return (
        <button>{props.city}/{props.uf}</button>
    )
}