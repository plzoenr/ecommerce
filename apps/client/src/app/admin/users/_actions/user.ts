'use server'

import {z} from "zod"
import {redirect} from "next/navigation"

const createSchema = z.object({
    firstName: z.string().min(1, {message: "Firstname can't be blank"}),
    lastName: z.string().min(1, {message: "Lastname can't be blank"}),
    email: z.string().min(1, {message: "Email can't be blank"}).email("This is not a valid email.")
})

export async function createUser(prevState: unknown, formData: FormData) {
    const result = createSchema.safeParse(Object.fromEntries(formData.entries()))
    if(result.success === false) {
        return result.error.formErrors.fieldErrors
    }

    const data = result.data
    const response = await fetch('http://localhost:3000/api/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    });

    const res_data = await response.json();
    if (res_data && res_data.firstName) {
        redirect('/admin/users');
    }
}

export async function deleteUser(id: string) {
    const response = await fetch(`http://localhost:3000/api/users/${id}`, {
        method: 'DELETE'
    });

    const res_data = await response.json();

    if (res_data) {
        redirect('/admin/users');
    }
}

export async function updateUser(id: string, prevState: unknown, formData: FormData) {
    const result = createSchema.safeParse(Object.fromEntries(formData.entries()))
    if(result.success === false) {
        return result.error.formErrors.fieldErrors
    }

    const data = result.data
    const response = await fetch(`http://localhost:3000/api/users/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    });

    const res_data = await response.json();
    if (res_data && res_data.firstName) {
        redirect('/admin/users');
    }
}
