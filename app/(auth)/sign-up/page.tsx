'use client';

import AuthForm from "@/components/ui/forms/AuthForm"
import { SignUpSchema } from "@/lib/validations";

const signUpDefaults = {
  email: "",
  password: "",
  name: "",
  username: "",
}

const SignUp = () => {
  return (
    <div>
      <AuthForm 
              defaultValues={signUpDefaults}
              formType="SIGN_UP"
              schema={SignUpSchema}
              onSubmit={(data) => Promise.resolve({ success: true })}
      />
    </div>
  )
}

export default SignUp