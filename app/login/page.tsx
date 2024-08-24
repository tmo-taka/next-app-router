'use client'

import { Input } from "../ui/input"
import { loginAction } from "../lib/loginAction"

export default function Login() {
	return (
        <form action={loginAction}>
            <Input
                type="text"
                name="id"
                formTitle="ユーザーID"
                required={true}
            />
            <Input
                type="password"
                name="password"
                formTitle="パスワード"
                required={true}
            />
            <button type="submit">
                送信
            </button>
        </form>
    )
}
