import { useRef, useState } from "react";
import { Input } from "../components/Input";
import { BACKEND_URL } from "../Config";
import { Button } from "../components/Button";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export function Signin() {
    const usernameRef = useRef<HTMLInputElement | null>(null);
    const passwordRef = useRef<HTMLInputElement | null>(null);
    const [loading, setLoading] = useState(false); 
    const navigate = useNavigate();

    async function signin() {
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

            const response = await axios.post(`${BACKEND_URL}/api/v1/signin`, { username, password });

            if (response.data.token) {
                localStorage.setItem("token", response.data.token);
                navigate("/dashboard");
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
        <div className="h-screen w-screen bg-blue-100 flex justify-center items-center">
            <div className="bg-white shadow-xl rounded-xl w-96 p-6 flex flex-col items-center">
                <h1 className="text-2xl font-bold text-blue-600 mb-2">Welcome Back</h1>
                <p className="text-gray-600 text-center mb-6">Sign in to your Brainly account</p>

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

                {/* Signin Button */}
                <div className="w-4/5 mt-6">
                    <Button 
                        loading={loading} 
                        variant="primary" 
                        text="Sign In"
                        fullWidth 
                        onClick={signin}
                    />
                </div>

                {/* Sign Up Redirect */}
                <p className="text-gray-600 text-center mt-4">
                    Don't have an account? 
                    <span 
                        className="text-blue-500 cursor-pointer hover:underline"
                        onClick={() => navigate("/signup")}
                    >
                        {" "}Sign up
                    </span>
                </p>
            </div>
        </div>
    );
}