'use client'

import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import { useFormState, useFormStatus } from "react-dom";
import {User} from "api/dist/user/user.entity";
import {createUser, updateUser} from "@/app/admin/users/_actions/user";
import SubmitButton from "@/app/admin/_components/SubmitButton";

export function UserForm({user}: {user?: User | null}) {
    const [error, action] = useFormState(user == null ? createUser : updateUser.bind(null, user.id), {})

    return (
        <form className="space-y-8" action={action}>
            <div className="space-y-2">
                <Label>First Name</Label>
                <Input type="text"
                       name="firstName"
                       id="firstName"
                       defaultValue={user?.firstName || "" }
                       autoComplete="off" />
                {error.firstName && <div className="text-destructive">{error.firstName}</div> }
            </div>

            <div className="space-y-2">
                <Label>Last Name</Label>
                <Input type="text"
                       name="lastName"
                       id="lastName"
                       defaultValue={user?.lastName || "" }
                       autoComplete="off" />
                {error.lastName && <div className="text-destructive">{error.lastName}</div> }
            </div>

            <div className="space-y-2">
                <Label>Email</Label>
                <Input type="text"
                       name="email"
                       id="email"
                       defaultValue={user?.email || "" }
                       autoComplete="off" />
                {error.email && <div className="text-destructive">{error.email[0]}</div> }
            </div>

            <SubmitButton />
        </form>
    )
}
