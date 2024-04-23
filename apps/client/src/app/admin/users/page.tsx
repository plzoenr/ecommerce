import {cn} from "@/lib/utils";
import Link from "next/dist/client/link";
import {PageHeader} from "@/app/admin/_components/PageHeader";
import {Button} from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuItem,
    DropdownMenuContent,
    DropdownMenuTrigger, DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu"
import {MoreVertical} from "lucide-react"
import {DeleteDropdownItem} from "@/app/admin/users/_components/UserActions";

type User = {
    id: number,
    firstName: string,
    lastName: string,
    email: string
}

interface Props {
    usersData: {
        users: User[]
    }
}

export default async function AdminUser() {
    const usersData = await getAllUser()

    return (<>
            <div className="flex justify-between items-center gap-4">
                <PageHeader>Users</PageHeader>
                <Button>
                    <Link href="/admin/users/new">Add User</Link>
                </Button>
            </div>

            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-center">
                    <thead className="text-xs text-gray-700 uppercase bg-primary text-secondary">
                    <tr>
                        <th scope="col" className="px-6 py-3">First name</th>
                        <th scope="col" className="px-6 py-3">Last name</th>
                        <th scope="col" className="px-6 py-3">Email</th>
                        <th scope="col" className="px-6 py-3"></th>
                    </tr>
                    </thead>
                    <tbody>
                    {usersData && usersData.users && usersData.users.map((user) => (
                        <tr className="bg-white border-b hover:bg-gray-50 bg-background">
                            <td className="px-6 py-4">{user.firstName}</td>
                            <td className="px-6 py-4">{user.lastName}</td>
                            <td className="px-6 py-4">{user.email}</td>
                            <td className="px-6 py-4">
                                <DropdownMenu modal={false}>
                                    <DropdownMenuTrigger asChild>
                                        <MoreVertical>Actions</MoreVertical>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent>
                                        <Link href={`/admin/users/${user.id}/edit`}>
                                            <DropdownMenuItem>Edit
                                            </DropdownMenuItem>
                                        </Link>
                                        <DeleteDropdownItem id={user.id}/>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export async function getAllUser() {
    const res = await fetch('http://localhost:3000/api/users', {cache: 'no-store'})
    const users: User[] = await res.json()
    return {users}
}
