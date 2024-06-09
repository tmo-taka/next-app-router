import Link from 'next/link'

export default function Page() {
    type Menu = {
        id: number,
        name: string
    }
    const menuLists: Menu[]  = [
        {id: 1, name: '一番目'},
        {id: 2, name: '二番目'},
        {id: 3, name: '三番目'}
    ]
    return (
        <ul>
            {
                menuLists.map((menu:Menu, index:number) => {
                    return (
                        <li key={menu.id}>
                            <Link href={`/test/detail/${menu.id}`}>{menu.name}</Link>
                        </li>
                    )
                })
            }
        </ul>
    );
}
