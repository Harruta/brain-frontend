import { Input } from "../components/Input";
import { Button } from "../components/Button";

export function Signup() {
    return (
        <div className="h-screen w-screen bg-gray-200 flex justify-center items-center">
            <div className="bg-white rounded-xl min-w-48 p-6">
                <Input placeholder="username" className="border border-gray" />
                <Input placeholder="password" className="border border-gray" />
                <div className="flex justify-center mt-4">
                    <Button variant="primary" text="Signup" fullWidth={true} />
                </div>
            </div>
        </div>
    );
}
