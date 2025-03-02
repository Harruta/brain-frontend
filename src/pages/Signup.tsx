import axios from "axios";
import { useState, useRef } from "react";
import { Input } from "../components/Input";
import { Button } from "../components/Button";
import { BACKEND_URL } from "../Config";

export function Signup() {
    const usernameRef = useRef<HTMLInputElement | null>(null);
    const passwordRef = useRef<HTMLInputElement | null>(null);
    const [loading, setLoading] = useState(false); // Track loading state

    async function signup() {
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

            const response = await axios.post(`${BACKEND_URL}/api/v1/signup`, { username, password });
            console.log(response.data);
            alert("Signup successful!");
        } catch (error) {
            console.error("Signup error:", error);
            alert("Signup failed!");
        } finally {
            setLoading(false); // Reset loading state after request
        }
    }

    return (
        <div className="h-screen w-screen bg-gray-200 flex justify-center items-center">
            <div className="bg-white rounded-xl min-w-48 p-6">
                <Input ref={usernameRef} placeholder="Username" />
                <Input ref={passwordRef} placeholder="Password" />
                <div className="flex justify-center mt-4">
                    <Button 
                        loading={loading}  // Pass the loading state
                        variant="primary" 
                        text="Signup"
                        fullWidth 
                        onClick={signup}
                    />
                </div>
            </div>
        </div>
    );
}
