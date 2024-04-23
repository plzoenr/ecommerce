import { PageHeader } from "@/app/admin/_components/PageHeader";
import { UserForm } from "@/app/admin/users/_components/UserForm";

export default async function EditUserPage({
  params: {id},
}: {
  params: {id: string}
}) {
    const res = await fetch(`http://localhost:3000/api/users/${id}`)
    const user = await res.json();

    return (
        <>
            <PageHeader>Edit Product</PageHeader>
            <UserForm user={user} />
        </>
    )
}
