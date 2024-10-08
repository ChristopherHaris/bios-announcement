"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

import { Loader2Icon } from "lucide-react";
import * as z from "zod";
import axios from "axios";
import { FormProvider, useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "../ui/form";
import { toast } from "sonner";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

type UserAuthFormProps = React.HTMLAttributes<HTMLDivElement>

const formSchema = z.object({
  nim: z.string().min(1, {
    message: "NIM is required.",
  }),
  password: z.string().min(1, {
    message: "Password is required.",
  }),
});

export function UserLoginForm({ className, ...props }: UserAuthFormProps) {
  const [isLoading, setIsLoading] = React.useState(false);
  const router = useRouter();

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: { nim: "", password: "" },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      setIsLoading(true);
      await axios
        .post("/api/login", values)
        .then(function (response) {
          toast.success("Login Successful");
          setIsLoading(false);
          if (response.data.hasPassed) {
            router.push(
              `/onboarding?name=${response.data.name}&nim=${response.data.nim}&division=${response.data.division}`
            );
            return;
          } else {
            router.push("/nt");
          }
        })
        .catch(function (error) {
          console.log(error);
          toast.error("Please Try Again");
          setIsLoading(false);
        });

      form.reset();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="grid gap-4">
            <div className="grid gap-4">
              <FormField
                control={form.control}
                name="nim"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        id="nim"
                        placeholder="NIM"
                        type="text"
                        autoCapitalize="none"
                        autoCorrect="off"
                        disabled={isLoading}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        id="password"
                        placeholder="password"
                        type="password"
                        autoCapitalize="none"
                        disabled={isLoading}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <Button disabled={isLoading}>
              {isLoading && (
                <Loader2Icon className="mr-2 h-4 w-4 animate-spin" />
              )}
              Login
            </Button>
          </div>
        </form>
      </FormProvider>
    </div>
  );
}
