import { UserLoginForm } from "@/components/authentication/user-login-form";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const metadata = {
  title: "Login",
  description: "Authentication forms built using the components.",
};

export default function AuthenticationPage() {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle className="text-2xl">Check Your Result</CardTitle>
        <CardDescription>
          Enter your details below to check your result.
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <UserLoginForm/>
      </CardContent>
    </Card>
  );
}