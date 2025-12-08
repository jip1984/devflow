"use client";

import AuthForm from "@/components/ui/forms/AuthForm";
import { SignInSchema } from "@/lib/validations";

const signInDefaults = {
  email: "",
  password: "",
};

const SignIn = () => {
  return (
    <div>
      <AuthForm
        defaultValues={signInDefaults}
        formType="SIGN_IN"
        schema={SignInSchema}
        onSubmit={(data) => Promise.resolve({ success: true })}
      />
    </div>
  );
};

export default SignIn;
