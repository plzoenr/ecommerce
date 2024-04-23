import {PageHeader} from "@/app/admin/_components/PageHeader";
import {UserForm} from "@/app/admin/users/_components/UserForm";

export default function NewUser() {
    return <>
        <PageHeader>Add User</PageHeader>
        <UserForm />
    </>
}
