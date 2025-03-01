import { Input } from "../components/Input";
import { Button } from "../components/Button";

export function Signup() {
    return <div className="h-screen w-screen bg-gray-200 flex
    justify-center items-center">
        <div className="bg-white rounded border min-w-48">
            <Input placeholder="username"/>
            <Input placeholder="password"/>

            <Button variant="primary" text="Signup"/>
        </div>

    </div>
}