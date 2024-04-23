'use client'

import {DropdownMenuItem} from "@/components/ui/dropdown-menu";
import {startTransition, useTransition} from "react";
import {deleteUser} from "@/app/admin/users/_actions/user";

export function DeleteDropdownItem({id}: {id: number}) {
    const [isPending, startTransition] = useTransition();

    return (
        <DropdownMenuItem disabled={isPending} onClick={() => {
            startTransition(async () => {
                await deleteUser(id)
            })
        }}>
            Delete
        </DropdownMenuItem>
    )
}
