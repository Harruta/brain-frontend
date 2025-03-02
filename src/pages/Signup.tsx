import axios from "axios";
import { useRef } from "react";
import { Input } from "../components/Input";
import { Button } from "../components/Button";
import { BACKEND_URL } from "../Config";

export function Signup() {
    const usernameRef = useRef<HTMLInputElement | null>(null);
    const passwordRef = useRef<HTMLInputElement | null>(null);

    async function signup() {
        const username = usernameRef.current?.value;
        const password = passwordRef.current?.value;
        axios.post(BACKEND_URL + "/api/v1/signup", {
            username,
            password
        })
    }

    return (
        <div className="h-screen w-screen bg-gray-200 flex justify-center items-center">
            <div className="bg-white rounded-xl min-w-48 p-6">
                <Input ref={usernameRef} placeholder="Username" />
                <Input ref={passwordRef} placeholder="Password" />
                <div className="flex justify-center mt-4">
                    <Button loading={false} variant="primary" text="Signup" fullWidth />
                </div>
            </div>
        </div>
    );
}
