"Use State";
import axios from "axios";
import { useState, useRef } from "react";
import { Input } from "../components/Input";
import { Button } from "../components/Button";
import { BACKEND_URL } from "../Config";
import { useNavigate } from "react-router-dom";

export function Signup() {
    const usernameRef = useRef<HTMLInputElement | null>(null);
    const passwordRef = useRef<HTMLInputElement | null>(null);
    const [loading, setLoading] = useState(false); 
    const navigate = useNavigate();

    async function signup() {
        if (loading) return;
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
            navigate("/signin");
            alert("Signup successful!");
        } catch (error) {
            console.error("Signup error:", error);
            alert("Signup failed!");
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="h-screen w-screen bg-blue-100 flex justify-center items-center">
            <div className="bg-white shadow-xl rounded-xl w-96 p-6 flex flex-col items-center">
                <h1 className="text-2xl font-bold text-blue-600 mb-2">Welcome to Brainly</h1>
                <p className="text-gray-600 text-center mb-6">Create an account to get started</p>

                {/* Centered Inputs */}
                <div className="w-full flex flex-col items-center space-y-4">
                    <Input 
                        ref={usernameRef} 
                        placeholder="Username" 
                        className="w-4/5" 
                    />
                    <Input 
                        ref={passwordRef} 
                        type="password" 
                        placeholder="Password" 
                        className="w-4/5" 
                    />
                </div>

                {/* Signup Button */}
                <div className="w-4/5 mt-6">
                    <Button 
                        loading={loading} 
                        variant="primary" 
                        text="Sign Up"
                        fullWidth 
                        onClick={signup}
                    />
                </div>

                {/* Sign In Redirect */}
                <p className="text-gray-600 text-center mt-4">
                    Already have an account? 
                    <span 
                        className="text-blue-500 cursor-pointer hover:underline"
                        onClick={() => navigate("/signin")}
                    >
                        {" "}Sign in
                    </span>
                </p>
            </div>
        </div>
    );
}