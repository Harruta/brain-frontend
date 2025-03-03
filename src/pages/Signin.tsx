import { useRef, useState } from "react";
import { Input } from "../components/Input";
import { BACKEND_URL } from "../Config";
import { Button } from "../components/Button";
import axios from "axios";

export function Signin() {
    const usernameRef = useRef<HTMLInputElement | null>(null);
    const passwordRef = useRef<HTMLInputElement | null>(null);
    const [loading, setLoading] = useState(false); // Track loading state

    async function signin() {
        if (loading) return; // Prevent duplicate requests
        setLoading(true);

        try {
            const username = usernameRef.current?.value;
            const password = passwordRef.current?.value;

            if (!username || !password) {
                alert("Please fill in both fields");
                setLoading(false);
                return;
            }

            const response = await axios.post(`${BACKEND_URL}/api/v1/signin`, { username, password });

            if (response.data.token) {
                localStorage.setItem("jwt", response.data.token);
                alert("Signin successful!");
            } else {
                alert("Invalid credentials. Please try again.");
            }
        } catch (error) {
            console.error("Signin error:", error);
            alert(error.response?.data?.message || "Signin failed!");
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="h-screen w-screen bg-gray-200 flex justify-center items-center">
            <div className="bg-white rounded-xl min-w-48 p-6">
                <Input ref={usernameRef} placeholder="Username" />
                <Input ref={passwordRef} placeholder="Password" type="password" />
                <div className="flex justify-center mt-4">
                    <Button 
                        loading={loading} 
                        variant="primary" 
                        text="Signin"
                        fullWidth 
                        onClick={signin}
                    />
                </div>
            </div>
        </div>
    );
}
